import Rating from "./rating";
import dessert from "../images/dessert.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResultCard = ({ result }) => {


    return (
        <div className="button results">

                            
            <div className="resultsHeader">
                <h3>{result?.name || <Skeleton/>}</h3>
                <h5>10 KM | {Array(result?.price|| <Skeleton/>).fill('$').join('')}</h5>
            </div>


            <div className="actionContainer">
            <button className="actionButton"><a href={result?.maps|| <Skeleton/>}  target="_blank"><h4>DIRECTIONS</h4></a></button>
            <button className="actionButton"><a href={result?.website|| <Skeleton/>} target="_blank"><h4>WEBSITE</h4></a></button>
            </div>

            <div className="infoContainer">
            <h5 className="rating"> <Rating value={result?.rating|| <Skeleton/>} total={result?.totalRatings}/> </h5>
            <h4>Services: </h4>
            <h5>Hours: {result?.openingHours|| <Skeleton/>}</h5>
            <h5>Address: {result?.formattedAddress|| <Skeleton/>}</h5>
            <h5>Phone: {result?.formattedPhone|| <Skeleton/>}</h5>
            </div>

            <img className="resultImage" src={dessert} alt="dessert"></img>
        </div>
    )
}

export default ResultCard