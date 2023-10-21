const issues = document.querySelectorAll(".issue");

        issues.forEach((issue, index) => {
            issue.addEventListener("click", () => {
                const suggestion = issue.nextElementSibling;
                suggestion.style.display = suggestion.style.display === "block" ? "none" : "block";
            });
        });