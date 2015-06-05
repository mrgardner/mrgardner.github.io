var Profile = function () {
  var charterPorfiles = {
    'users': {

      'zijihoh': {
        'username': 'zijihoh',
        'password': 'D0llar$ign',
        'charterID': 'zijihoh@charter.net',
        'firstName': 'AMBER',
        'lastName': 'MCKENNA',
        'accountNumber': '8350120014989219',
        'firstLineServiceAddress': '60 FRANKLIN ST STE 203',
        'secondLineServiceAddress': 'WORCESTER, MA 01608',
        // 'secondLineServiceAddress': 'WORCESTER, MA 01608-192gti 9',
        'firstLineBillingAddress': '858 STATE ROUTE 203',
        'secondLineBillingAddress': 'SPENCERTOWN, NY 12165',
        'zipCode': '01608',
        'macAddress': '8C26', //Full MAC ADDRESS 001BD7868C26
        'securityAnswer': 'toyota',
        'email': 'kevinmckenna@ziji-media.com'
      },

      // Cannot be used for my account test doesn't have billing address
      'different15': {
        'username': 'different15',
        'password': 'Testing01',
        'charterID': 'different15@charter.net',
        'firstName': 'UATADD15',
        'lastName': 'TEST',
        'accountNumber': '8752110100277474',
        'firstLineServiceAddress': '1015 WASHINGTON SQ # C1',
        'secondLineServiceAddress': 'WASHINGTON, MO 63090-5307',
        //'firstLineBillingAddress': '',
        //'secondLineBillingAddress': '',
        'zipCode': '63090',
        'macAddress': '8C43',// Full MAC ADDRESS C8FB26988C43
        'securityAnswer': 'Hedwig',
        'email': 'arunsamy1985@gmail.com'
      },

  };

  this.getProfile = function (profile) {
    return charterPorfiles.users[profile];
  };
  this.getDefaultProfile = function () {
    return charterPorfiles.users[defaultProfile];
  };
};

module.exports = new Profile();