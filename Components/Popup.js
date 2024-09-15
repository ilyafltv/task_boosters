let ROOT_POPUP = document.getElementById('popup');

class Popup {

    close() {
        ROOT_POPUP.classList.add('popup-closed');
        const html = '';
        ROOT_POPUP.innerHTML = html;
    }

    renderPopupLogin() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>

                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross.svg" alt="cross"/>
                    <h3>Log In</h3>

                    <p class="popup-block__p-title">And discover the best employee</p>

                    <form id="form-login" onsubmit="popup.close()">
                        <label for="email">Email address</label>
                        <input type="email" id="email" placeholder="Email"/>

                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Password"/>

                        <input class="btn-green" type="submit" value="Log In"/>
                    </form>

                    <p class="popup-block__register-account">Don't have an account?<br><a onclick="popup.renderPopupRegistration()">Sign up</a></p>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration() {
        popup.close();


        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container"> 
                <div class="popup-bg" onclick="popup.close()"></div>

                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross.svg" alt="cross"/>
                    <h3>Get Started</h3>
                    <p class="popup-block__p-title">Register an account</p>

                    <form id="form-registration">
                        <label for="email">Email address</label>
                        <input type="email" id="email" placeholder="Email"/>

                        <label for="name" >Your Name</label>
                        <input type="text" id="name" placeholder="Full name"/>

                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Password"/>

                        <input class="btn-green" type="submit" value="Sign Up" onclick="popup.renderPopupRegistration2()" />
                    </form>

                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration2() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross.svg" alt="cross"/>
                    <h3>Get Started</h3>
                    <p class="popup-block__p-title">Create an account </p>
                    <form>
                        <label for="phone">Phone number</label>
                        <input id="phone" type="text" placeholder="(777) 777-7777"/>

                        <input class="btn-green" type="submit" value="Send Code" onclick="popup.renderPopupRegistration3()" />
                    </form>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration3() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross.svg" alt="cross"/>
                    <h3>Get Started</h3>
                    <p class="popup-block__p-title">Create an account </p>
                    <form>
                        <label for="phone">Phone number</label>
                        <input id="phone" type="text" placeholder="(777) 777-7777" disabled/>

                        <p class="popup-block__message">We'll send you a code to verify your account</p>

                        <label for="code">Input code here:</label>
                        <input id="code" placeholder="000000" type="text"/>

                        <input class="btn-green btn-confirm" type="submit" value="Confirm Number"/>
                        <input class="btn-secondary" type="submit" value="Edit Number"/>
                    </form>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupHistory() {
        popup.close();

        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block popup-block-history">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross.svg" alt="cross"/>
                    <h3>Order History</h3>
                    <p class="popup-block__p-title">You have no completed orders yet!</p>

                    <input class="btn-green" type="submit" value="Close" onclick="popup.close()"/>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

}
const popup = new Popup();