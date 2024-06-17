import { $ } from "@wdio/globals";
import Page from './page.js';


class loginPage{
//elements
get userNamefield(){
    return $("#username");
}

get passwordfield(){
    return $("input[name='password']");
}

get loginButton(){
    return $("i[class='fa fa-2x fa-sign-in']");
}



//action
async clickonUsernamefield(username){

    (await this.userNamefield).setValue(username);
    await browser.pause(3000);

}

async clickonPasswordfield(password){

    (await this.passwordfield).setValue(password);
    await browser.pause(3000);
}

async clickonLoginbutton(){

    (await this.loginButton).click();
    await browser.pause(3000);

}

async gotoLoginpage(){
    await browser.url("https://the-internet.herokuapp.com/login");
}

async loginPageprocedure(username,password){
   await this.clickonUsernamefield(username);
   await this.clickonPasswordfield(password);
   await this.clickonLoginbutton();

}


}

export default new loginPage(); //used it for exporting this class