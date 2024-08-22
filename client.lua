CreateThread( function()
    while true do
        Wait(2000)
        SendNUIMessage({
            action = "update",
            players = GetNumberOfPlayers(),
            id = GetPlayerServerId(PlayerId())
        })
    end
end)