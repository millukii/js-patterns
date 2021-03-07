//publish-subscribe ej; addEventListener sobre objetos


const user = new User()

const init = () => {
    user.on('login', userLoggedIn)
    user.on('login', retrieveInitData)
}

const userLoggedIn = () => {

}

app.init()

const login = () => {
    user.trigger('login')
}

login()