// Wait until the DOM is loaded
$(() => {
    //create a new burger
    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on submit
        event.preventDefault();

        let newBurger = {
            burger_name: $("#addBurger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            console.log("New burger added!");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // This code below currently doesn't work. I know I need to flip the devoured state from false to true but wasn't able to get it working with the button
    $(".change-devour").on("click", (event) => {
        let id = $(this).data("id");
        let changeDevourState = {
            devour: true,
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: changeDevourState,
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});