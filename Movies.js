// import logo from './logo.svg';
import './act7.1.css'; 

export default function Movie
({title,Show_Time,Screen,Row,Seat,imageUrl})
{

return(<>
    <div class="card">
      <h1>Movies ShowTime</h1>
      <h2>Details</h2>
      <h5 class="card-header">{title}</h5>
      <div class="card-body">
        <h5>{Show_Time}</h5>
      
        <p  class="card-teaxt">
          <table class="table">
            <tr><td class="text-sucess font-weight-blod">title:</td>
            <td>{title}</td></tr>
            <tr><td class="text-sucess font-weight-blod">Show_Time:</td>
            <td>{Show_Time}</td></tr>
            <tr><td class="text-sucess font-weight-blod">Screen:</td>
            <td>{Screen}</td></tr>
            <tr><td class="text-sucess font-weight-blod">Row:</td>
            <td>{Row}</td></tr>
            <tr><td class="text-sucess font-weight-blod">Seat:</td>
            <td>{Seat}</td></tr>
            <tr><td class="text-sucess font-weight-blod">imageUrl:</td>
            <td>{imageUrl}</td></tr>
            </table></p></div></div></>)
}





