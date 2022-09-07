fetchPasskey () {
  read -p 'Enter your pass key: ' PASSKEY
  return $PASSKEY
}

encryptData () {
  passkey="${1}"
  openssl enc -in id.tar.gz -out id.tar.gz.enc -aes-256-cbc -salt  -pass "pass:${passkey}" -pbkdf2
}

decryptData () {
  passkey="${1}"
  openssl enc -in id.tar.gz.enc -out id.tar.gz -d -aes-256-cbc -salt -pass "pass:${passkey}" -pbkdf2
}

listOptions () {
  echo "
What Operation you want to do?
1) Start Encryption
2) Start Decryption
3) Exit
Choose an option:  "
    read -r ans
    case $ans in
    1)
      fetchPasskey PASSKEY
      encryptData "$PASSKEY"
      echo 'Encrypting ...';;
    2)
      fetchPasskey PASSKEY
      decryptData "$PASSKEY"
      echo 'Decrypting ...';;
    3)
      echo 'Exiting'
      exit 0;;
    *)
      echo 'Wrong option'
      exit 0;;
    esac
}

listOptions
