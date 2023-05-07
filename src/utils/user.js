class user {

   static parseJwt(token) {
        if (token != null) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        } else {
            return null;
        }
    }
    static getUser()
    {
              return this.parseJwt(localStorage.getItem('token'));
    }

}
export default user
