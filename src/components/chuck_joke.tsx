import Joke from "../joke";
interface ChuckJokeProps {
    geniusJokes: Joke[]
}


const ChuckJoke: React.FC<ChuckJokeProps> = ({geniusJokes}) => 
<div>
    {geniusJokes.map(joke => (
    <p key={joke.id}>{joke.joke}</p>
    ))}
</div>



export default ChuckJoke;
