


$("#add_movie").submit(function (event) {
    alert("Data Inserted Successfully!");
})

$("#update_movie").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    console.log(data);  
    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })

    console.log(data);
    var request = {
        "url": `/api/movies/${data.id}`,
        "method": "POST",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Data Updated Successfully!");
    })
    // alert("Data Updated Successfully!");

})

if (window.location.pathname == "/admin") {
    $ondelete = $("tbody tr .actions a.delete");
    
    $ondelete.click(function (event) {
        console.log(event.target);
        var id = $(event.target).attr("data-id")

        var request = {
            "url": `/api/movies/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}
