movies = [
    {
        name: "Frozen",
        rating: 3.5,
        seen: true
    },
    {
        name: "Peter Lauro",
        rating: 5,
        seen: true
    },
    {
        name: "Ink",
        rating: 4.5,
        seen: false
    }
];

function printMessage(movies)
{
    var message;
    movies.forEach(movie => {
        if(movie.seen == true)
            message = "You have seen ";
        else
            message = "You have not seen ";
        message += movie.name + ", rating: " + movie.rating
        console.log(message);
    });
}


// Test
printMessage(movies);