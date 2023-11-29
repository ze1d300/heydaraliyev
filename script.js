document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    alert("Performing search...");
  });
