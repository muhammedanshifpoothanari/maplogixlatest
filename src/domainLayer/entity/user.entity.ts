class UserInfo {
    constructor(
        public firstName: string,
        public lastName: string,
        public mobileNumber: number,
        public email: string,
        public adhaar: number,
        public userType: string,
        public postalCode: number,
        public panchayath: string,
        public city: string,
        public district: string,
        public state: string,
        public country: string,
        public about: string,
    ){}
}

module.exports ={  
    UserInfo
}

