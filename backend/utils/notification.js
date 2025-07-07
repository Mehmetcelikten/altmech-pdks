// Bu modül Firebase Admin SDK veya başka servisle entegre edilebilir
// Şimdilik basit bir simülasyon

const sendNotification = (targetUser, title, message) => {
  // Gerçek dünyada burada Firebase Admin SDK kodu olurdu
  console.log(`🔔 Notification sent to ${targetUser}: [${title}] ${message}`);
  
  // Örn:
  // admin.messaging().sendToDevice(token, { notification: { title, body: message } })
  //   .then(response => console.log('Successfully sent:', response))
  //   .catch(err => console.error('Error sending:', err));
};

module.exports = {
  sendNotification
};
