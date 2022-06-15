$(function() {
    $("#ajaxButton").click(function () {
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users',
            datatype: 'json',
            type: 'GET',
            data: {
                key: 'value'
            },
            success: (data) => {
                let extractedData = [];
                data.map((item) => {
                    $("#listInfo").append(
                        `<li>${item.id} -> ${item.name}</li>`
                    );
                });
            },
            error: (err) => {
                $("#ajaxInfo").text(err);
            }
        });
    });
});