export default function MovieDetail(props){
    console.log(props)
    return <h1>Movie{props.params.id}</h1>
}