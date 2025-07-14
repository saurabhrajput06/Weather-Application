import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBoc.css"

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function infoBox({info}){
const image_url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


const Hot_url= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

const cold_url="https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

const Rain_url = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";



    return(
        <div className="infoBox">
<div className='cardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rain_url:info.temp>288?Hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>288?<WbSunnyIcon/>:<AcUnitIcon/>}

        </Typography>
       
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temprature = {info.temp}&deg;K</p>
        <div>humidity = {info.humidity}</div>
        <div>Min Temprature = {info.tempMin}&deg;k</div>
        <div> Max Temprature = {info.tempMax}&deg;k</div>
        <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;k</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}