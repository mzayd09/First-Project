const messageList = document.getElementById('messageList');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');

const chatHistory = [
  { sender: 'bot', text: 'Welcome to FoodHub Chat! Ask me about your order or menu.', time: new Date() },
];

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function renderMessages() {
  if (!messageList) return;
  messageList.innerHTML = '';

  chatHistory.forEach(message => {
    const messageItem = document.createElement('div');
    messageItem.className = `message ${message.sender}`;
    messageItem.innerHTML = `
      <div>${message.text}</div>
      <div class="message-meta">${message.sender === 'user' ? 'You' : 'FoodHub'} · ${formatTime(message.time)}</div>
    `;
    messageList.appendChild(messageItem);
  });

  messageList.scrollTop = messageList.scrollHeight;
}

function addMessage(sender, text) {
  chatHistory.push({ sender, text, time: new Date() });
  renderMessages();
}

function getBotReply(userText) {
  const normalized = userText.toLowerCase();

  if (normalized.includes('order')) {
    return 'Your order is being prepared. I will update you when it is out for delivery.';
  }
  if (normalized.includes('menu')) {
    return 'We have pizza, burgers, salads, and desserts. What would you like to see?';
  }
  if (normalized.includes('hello') || normalized.includes('hi')) {
    return 'Hi there! How can I help you today with your FoodHub order?';
  }
  if (normalized.includes('thanks') || normalized.includes('thank you')) {
    return 'You are welcome! If you need anything else, just ask.';
  }
  return 'Thanks for your message — our team will reply shortly. In the meantime, explore the menu or check an order.';
}

chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const messageText = messageInput.value.trim();
  if (!messageText) return;

  addMessage('user', messageText);
  messageInput.value = '';

  setTimeout(() => {
    addMessage('bot', getBotReply(messageText));
  }, 700);
});

renderMessages();
