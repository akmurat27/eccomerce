<template>
    <div style="background-color: #BCDDFE; display: flex; width: 100%; flex-direction: column; justify-content: center; align-items: center;">
        <div style="display: flex; justify-content: space-between; margin: auto; align-items: center; margin-top: 8rem">
            <v-card style="background-color: #BCDDFE; width: 16%; margin: auto;" flat>
                <router-link to="/homeView" style="text-decoration: none; color: black;">
                    <div style="display: flex; justify-content: center; align-items: center; width: 50%; margin-bottom: 1rem;">
                        <v-img src="@/assets/Icon1.png" style="margin-right: 1rem;cursor: pointer;"></v-img>
                        <h3>E-Comm</h3>
                    </div>
                </router-link>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </v-card>
            <v-card style="background-color: #BCDDFE; display: flex; justify-content: center; align-items: flex-start; width: 15%; margin: auto; flex-direction: column;"  flat>
                <h3>Follow Us</h3>
                <p style="margin-top: 1rem; margin-bottom: 1rem;">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div style="display: flex;">
                    <v-img src="@/assets/facebook.png" style="cursor: pointer;"></v-img>
                    <v-img src="@/assets/twitter.png" style="margin-left: 2rem; cursor: pointer;"></v-img>
                </div>
            </v-card>
            <v-card style="background-color: #BCDDFE; display: flex; justify-content: center; align-items: flex-start; width: 8%; margin: auto; flex-direction: column;" flat>
                <h3 style="margin-bottom: 1rem;">Contact Us</h3>
                <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </v-card>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-direction: row; width: 80%; margin: auto; margin-top: 3rem;">
            <v-card v-for="(ItemFooter, id) in footerItem" :key="id" style="background-color: transparent;" flat>
                <v-card-title style="padding: 0;" class="py-10">{{ ItemFooter.text }}</v-card-title>
                <v-card-subtitle style="padding: 0;" class="py-2">{{ ItemFooter.text1 }}</v-card-subtitle>
                <v-card-subtitle style="padding: 0;" class="py-2">{{ ItemFooter.text2 }}</v-card-subtitle>
                <v-card-subtitle style="padding: 0;" class="py-2">{{ ItemFooter.text3 }}</v-card-subtitle>
                <v-card-subtitle style="padding: 0;" class="py-2">{{ ItemFooter.text4 }}</v-card-subtitle>
            </v-card>
        </div>
        <v-tabs-slider color="white" style="width: 80%; margin: auto; height: 3px;" class="my-10"></v-tabs-slider>
        <div style="display: flex;  width: 80%; margin: auto; margin-bottom: 2rem;">
            <div style="width: 100%">
                <h3 style="color: #C1C8CE;">© 2018 Ecommerce theme by www.bisenbaev.com</h3>
            </div>
            <div style="display: flex; flex-direction: row;">
                <v-img src="@/assets/Western-union.png" class="mx-2" style="cursor: pointer;"></v-img>
                <v-img src="@/assets/Group 19.png" class="mx-2" style="cursor: pointer;"></v-img>
                <v-img src="@/assets/Paypal.png" class="mx-2" style="cursor: pointer;"></v-img>
                <v-img src="@/assets/Shape 327.png" class="mx-2" style="cursor: pointer;"></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: () => ({
        footerItem: [{
            text: "Information",
            text1: "About Us",
            text2: "Infomation", 
            text3: "Privacy Policy",
            text4: "Terms & Conditions"
        },{
            text: "Service",
            text1: "About Us",
            text2: "Infomation", 
            text3: "Privacy Policy",
            text4: "Terms & Conditions"
        },{
            text: "My Account",
            text1: "About Us",
            text2: "Infomation", 
            text3: "Privacy Policy",
            text4: "Terms & Conditions"
        },{
            text: "Our Offers",
            text1: "About Us",
            text2: "Infomation", 
            text3: "Privacy Policy",
            text4: "Terms & Conditions"
        }],
    })
}
</script>