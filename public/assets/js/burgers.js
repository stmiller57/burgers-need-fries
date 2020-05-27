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