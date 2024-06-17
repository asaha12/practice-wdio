describe("C-3-A-2 Practise, Practise More",()=>{

    it("Go to herokuapp add or remove element page", async()=>{
    await browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
    await browser.pause(3000);
})

    it("Click on the add element button", async()=>{

        const addButton = await $("button[onclick = 'addElement()']");
        await addButton.click();
        await browser.pause(3000);
    })

    it("Go to demoqa elements page", async()=>{
        await browser.url("https://demoqa.com/elements");
        await browser.pause(3000);
    })

    it("Scroll up to down & Down to up", async()=>{
        const lowerElement = await $$("//span[@class = 'pr-1']")[5]; //scroll down
        await lowerElement.scrollIntoView();
        await browser.pause(3000);
        
        const upperElement = await $("a[href='https://demoqa.com']"); //scroll up
        await upperElement.scrollIntoView();
        await browser.pause(3000);

    })


    it("Form Fillup and Click on submit button", async()=>{
        await browser.url("https://demoqa.com/text-box");
        const username = await $("#userName");
        await username.setValue("Aditya Kumar Saha");
        const email = await $("#userEmail");
        await email.setValue("aniksaha637@gmail.com");
        const currentaddress = await $("#currentAddress");
        await currentaddress.setValue("Kuril,Dhaka");
        const permanentAddress = await $("#permanentAddress");
        await permanentAddress.setValue("Bangladesh");
        const submitbutton = await $("#submit");
        await submitbutton.scrollIntoView();
        await submitbutton.click();
        await browser.pause(3000);
    })

    it("Practise key board action", async()=>{
        await browser.url("https://play1.automationcamp.ir/keyboard_events.html");
        const longtext = await $("#area");
        await longtext.setValue("Aditya Kumar Saha");
        await browser.pause(3000);
        await browser.keys(["Control","a"]);
        await browser.pause(3000);
        await browser.keys(["Enter"]);
        await browser.pause(3000);

    })
     


})
