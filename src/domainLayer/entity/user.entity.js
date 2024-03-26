"use strict";
class UserInfo {
    constructor(firstName, lastName, mobileNumber, email, adhaar, userType, postalCode, panchayath, city, district, state, country, about) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.adhaar = adhaar;
        this.userType = userType;
        this.postalCode = postalCode;
        this.panchayath = panchayath;
        this.city = city;
        this.district = district;
        this.state = state;
        this.country = country;
        this.about = about;
    }
}
module.exports = {
    UserInfo
};
