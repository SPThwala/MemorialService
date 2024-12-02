<script>
    // Function to load memories from localStorage
    function loadMemories() {
        const memoryList = document.getElementById('memories');
        const savedMemories = JSON.parse(localStorage.getItem('memories')) || [];

        // Clear the current list
        memoryList.innerHTML = '';

        // Populate the list with saved memories
        savedMemories.forEach((memory) => {
            const listItem = document.createElement('li');
            listItem.textContent = memory;
            memoryList.appendChild(listItem);
        });
    }

    // Function to handle form submission
    document.getElementById('memoryForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const memoryInput = document.getElementById('memoryInput');
        const memoryText = memoryInput.value.trim();

        if (memoryText) {
            // Get existing memories or initialize an empty array
            const savedMemories = JSON.parse(localStorage.getItem('memories')) || [];

            // Add the new memory and save to localStorage
            savedMemories.push(memoryText);
            localStorage.setItem('memories', JSON.stringify(savedMemories));

            // Reload the memories and clear the input
            loadMemories();
            memoryInput.value = '';
        }
    });

    // Load memories on page load
    document.addEventListener('DOMContentLoaded', loadMemories);
</script>
