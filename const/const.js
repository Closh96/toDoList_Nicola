const status = {
  open:'open',
  deleted:'deleted',
}

const userStatus = {
  pending: 'pending',
  active: 'active',
}
const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
'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\n'+
'-----END RSA PRIVATE KEY-----'

const publicKey = '';

const mailConfig = {
  senderAddress: 'closh1996@gmail.com',
  smtpPassword: '*******',
  subject: 'todolist registration',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  html: '',

}

export {
  status,
  userStatus,
  privateKey,
  publicKey,
  mailConfig,
}