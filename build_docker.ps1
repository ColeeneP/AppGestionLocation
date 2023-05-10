$frontName = "gestion-front"
$backName =  "gestion-back"

$networkTest = docker network inspect gestionlocal
if($networkTest.Count -eq 0){
    docker network create gestionlocal
}

Write-Host "Checking previous container"
$existingContainerFront = docker container ls -a -f name=$frontName
$existingContainerBack = docker container ls -a -f name=$backName

if ($existingContainerFront.Count -gt 1) {
    Write-Host "Container found. Deleting..." -ForegroundColor Yellow
    docker container rm $($frontName) -f
}

if ($existingContainerBack.Count -gt 1) {
    Write-Host "Container found. Deleting..." -ForegroundColor Yellow
    docker container rm $($backName) -f
}

Write-Host "Checking previous image"
$existingImageFront = docker image list "$($frontName):latest"
$existingImageBack = docker image list "$($backName):latest"

if ($existingImageFront.Count -gt 1) {
    Write-Host "Image front found. Deleting..." -ForegroundColor Yellow
    docker image rm "$($frontName):latest" -f
}
if ($existingImageBack.Count -gt 1) {
    Write-Host "Image back found. Deleting..." -ForegroundColor Yellow
    docker image rm "$($backName):latest" -f
}

docker build -t "$($frontName):latest" ./frontend
docker build -t "$($backName):latest" ./backend

Write-Host "Starting containers" -ForegroundColor Green
$hostIP = ( Get-NetIPConfiguration |  Where-Object { $_.IPv4DefaultGateway -ne $null -and $_.NetAdapter.Status -ne "Disconnected" }).IPv4Address.IPAddress

docker container create -p 3000:8080 --add-host="localhost:$hostIP" `
    --network gestionlocal --name $backName "$($backName):latest"

docker container create -p 3001:3000 --add-host="localhost:$hostIP" `
    --network gestionlocal --name $frontName "$($frontName):latest"

Write-Host "Operation complete " -ForegroundColor Green