
function tank_movement_angle_update(tank, elapsedTime)
{
    let vel = 0.10;
    if (tank.keysPressed['w'] == true) {
        if (tank.angle > 180.0)
            tank.angle -= 180.0
        if (tank.keysPressed['d'] == true)
        {
            if (tank.angle > 45.0)
            {
                tank.angle = Math.max(tank.angle - (vel * elapsedTime), 45.0);
            }
            else if (tank.angle < 45)
            {
                tank.angle = tank.angle + (1.0 * vel * elapsedTime);
            }
        }
        else if (tank.keysPressed['a'] == true) {
            if (tank.angle > 135.0)
            {
                tank.angle = Math.max(tank.angle - (vel * elapsedTime), 135.0);
            }
            else if (tank.angle < 135.0)
            {
                tank.angle = Math.min(tank.angle + (vel * elapsedTime), 135.0);
            }
        }
        else
        {
            if (tank.angle >= 0.0 && tank.angle < 90.0)
                tank.angle = Math.min(1.0 * tank.angle + (vel * elapsedTime), 90.0);
            else if (tank.angle > 90.0 && tank.angle < 270.0)
                tank.angle = Math.max(1.0 * tank.angle - (vel * elapsedTime), 90.0);
            else if (tank.angle > 270.0)
                tank.angle = (1.0 * tank.angle + (vel * elapsedTime)) % 360.0;
        }
    }
    else if (tank.keysPressed['s'] == true) {
        if (tank.angle < 180.0)
            tank.angle += 180.0;
        if (tank.keysPressed['d'] == true)
        {
            if (tank.angle >= 315.0)
            {
                tank.angle = Math.max(tank.angle - (vel * elapsedTime), 315.0);
            }
            else if (tank.angle < 315.0)
            {
                tank.angle = Math.min(tank.angle + (vel * elapsedTime), 315.0);
            }
        }
        else if (tank.keysPressed['a'] == true) {
            if (tank.angle >= 225.0)
            {
                tank.angle = Math.max(tank.angle - (vel * elapsedTime), 225.0);
            }
            else if (tank.angle < 225.0)
            {
                tank.angle = Math.min(tank.angle + (vel * elapsedTime), 225.0);
            }
        }
        else
        {
            if (tank.angle < 90.0 || tank.angle >= 270.0)
            {
                console.log("HERE");
                console.log(tank.angle);
                let wasPositive = tank.angle >= 0.0 && tank.angle <= 90.0;
                console.log(wasPositive);
                tank.angle -= (vel * elapsedTime);
                console.log(tank.angle);
                if (tank.angle <= 0.0 && wasPositive)
                {
                    console.log("was positive!");
                    tank.angle += 360.0;
                }
            }
            // else if (tank.angle > 270.0)
            //     tank.angle = Math.max(1.0 * tank.angle - (vel * elapsedTime), 270.0);
            else if (tank.angle < 270.0 && tank.angle > 90.0)
                tank.angle = Math.min(1.0 * tank.angle + (vel * elapsedTime), 270.0);
        }
    }
    else if (tank.keysPressed['a'] == true) 
    {
        if (tank.angle > 0.0 && tank.angle < 90.0)
            tank.angle += 180.0
        else if (tank.angle > 270.0 && tank.angle < 360.0)
            tank.angle -= 180.0
        if (tank.angle > 180.0)
        {
            tank.angle = Math.max(tank.angle - (vel * elapsedTime), 180.0);
        }
        else if (tank.angle < 180.0)
        {
            tank.angle = Math.min(tank.angle + (vel * elapsedTime), 180.0);
        }
    }
    else if (tank.keysPressed['d']) 
    {
        if (tank.angle >= 180.0 && tank.angle < 270.0)
            tank.angle -= 180.0;
        else if (tank.angle > 90.0 && tank.angle < 180.0)
            tank.angle += 180.0;
        if (tank.angle < 180.0)
        {
            tank.angle = Math.max(tank.angle - (vel * elapsedTime), 0.0);
        }
        else if (tank.angle > 180.0)
        {
            tank.angle = Math.min(1.0 * tank.angle + (vel * elapsedTime), 360.0);
        }
    }
    console.log(tank.angle);
}

function tank_movement_update(tank, elapsedTime)
{
    if (tank.keysPressed['w'] || tank.keysPressed['s'] || tank.keysPressed['d'] || tank.keysPressed['a'])
    {
        tank_movement_angle_update(tank, elapsedTime);
        let xAddition = 10.0 * tank.velocity * Math.cos(tank.angle * Math.PI / 180.0);
        let yAddition = 10.0 * tank.velocity * Math.sin(tank.angle * Math.PI / 180.0);

        tank.posX += xAddition;
        tank.posY -= yAddition;
    }

}