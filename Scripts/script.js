// Add this JavaScript to handle window resizing and ensure proper positioning
document.addEventListener("DOMContentLoaded", () => {
    // Function to adjust elements based on screen size
    function adjustForScreenSize() {
      const windowWidth = window.innerWidth
  
      // For very small screens, make additional adjustments
      if (windowWidth <= 380) {
        // Adjust flame positions for smaller candles
        const flames = document.querySelectorAll(".flame, .flame-7")
        flames.forEach((flame) => {
          flame.style.top = "-3px"
          flame.style.width = "5px"
          flame.style.height = "10px"
        })
      } else {
        // Reset to default styles for larger screens
        const flames = document.querySelectorAll(".flame, .flame-7")
        flames.forEach((flame) => {
          flame.style.top = "-4px"
          flame.style.width = "6px"
          flame.style.height = "12px"
        })
      }
    }
  
    // Run on page load
    adjustForScreenSize()
  
    // Run on window resize
    window.addEventListener("resize", adjustForScreenSize)
  })
  