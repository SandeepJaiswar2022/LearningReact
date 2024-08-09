function MoviesList({movieName,keyValue}) {
    return (
        <li key={keyValue} className="p-4 bg-indigo-300 rounded-lg shadow-sm hover:bg-indigo-400 cursor-pointer  transition-colors">
            <span className="font-semibold">{movieName}</span>
        </li>
    )
}
export default MoviesList
