<template>
    <v-app>
        <NavBar />
        <FirstPage />
        <v-container>
            <div>
                <h1 style="text-align: center; margin-top: 5rem;">
                    BEST SELLER
                </h1>
            </div>
            <v-tabs style="display: flex; justify-content: center; align-items: center;" class="my-5 mx-5">
                <v-tabs-slider color="accent" class="mt-n2" style="width: unset !important; height: 3px;"></v-tabs-slider>
                <v-tab v-for="(tabs, id) in tabsItem" :key="id" class="tabs-item" :ripple="false" style="margin-right: 5rem; font-size: 1.5rem;">{{ tabs.name }}</v-tab>
            </v-tabs>
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" md="3" sm="3" xs="3"
                        v-for="(product, id) in products"
                        :key="id"
                        class="mb-5"
                    >
                        <v-card 
                            height="480"
                            width="350"
                            :to="'/productlistitem/' + product.id"
                        >   
                        <div style="cursor: pointer; height: 45px; width: 80px; color: white; background-color: #FF4858; text-align: center;position: absolute; z-index: 99;"><h1   style="font-family: Proxima Nova, sans-serif;">HOT</h1></div>
                            <v-img :src="product.image" height="300" contain/>
                            <div class="cards">
                                <v-card-title style="color: #223263; padding: 0;line-height: 18px;font-size: 18px;">{{ product.title }}</v-card-title>
                                <v-card-title style="color: #FFC600; padding: 0;">{{ product.rating.rate }}</v-card-title>
                                <div class="prices">
                                    <v-card-title style="color: #40BFFF; padding: 10px;">{{ product.price }}</v-card-title>
                                    <v-card-title style="color: #9098B1; text-decoration: line-through;">$534,33</v-card-title>
                                    <v-card-title style="color: #FB7181">24% Off</v-card-title>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
               
                <div>
                    <h1 style="text-align: center; margin-top: 2rem; color: #33A0FF; margin-bottom: 5rem;">
                        LOAD MORE
                        <v-tabs-slider color="accent" class="mt-1" style="width: 10%; margin: auto; height: 4px;"></v-tabs-slider>
                    </h1>
                </div>
            </v-container>
        </v-container>
        <div style="background-color: #40BFFF; height: 800px ; display: flex; flex-direction: row;">
            <div style="display: flex; flex-direction: column; width: 40%; justify-content: center; align-items: flex-start; margin-left: 12rem;">
                <h1 style="color: #FFFFFF; font-size: 55px;">Adidas Men Running <br /> Sneakers</h1>
                <p style="color: #FFFFFF; font-size: 24px;">Performance and design. Taken right to the edge.</p>
                <h3  style="color: #FFFFFF; font-size: 20px;">SHOP NOW</h3>
                <v-tabs-slider color="white" class="mt-1" style="width: 13%; height: 4px;"></v-tabs-slider>
            </div>
            <v-img src="@/assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" style="position: relative; bottom: 15%;"></v-img>
        </div>
        <v-container>
            <div style="width: 80%; margin: auto; display: flex; justify-content: space-between; align-items: center; margin-top: 5rem;">
                <v-card v-for="(ItemIcon, id) in iconpage" :key="id" flat style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 16%; text-align: center;">
                    <v-img src="@/assets/shipping.png" style="height: 65px; width: 100px;"></v-img>
                    <v-card-title>{{ ItemIcon.text }}</v-card-title>
                    <v-card-subtitle>{{ ItemIcon.text1 }}</v-card-subtitle>
                </v-card>
            </div>
        </v-container>
        <div>
            <h1 style="text-align: center; margin-top: 4rem;">LATEST NEWS</h1>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin: auto; margin-top: 5rem;">
            <v-card v-for="(section_item, id) in sectionPage" :key="id" flat style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <v-img :src="section_item.image"></v-img>
                <v-card-text style="text-align: center;">{{ section_item.name }}</v-card-text>
                <v-card-title>{{ section_item.title }}</v-card-title>
                <v-card-subtitle>{{ section_item.text }}</v-card-subtitle>
            </v-card>
        </div>
        <div style="display: flex; width: 600px; margin: auto; margin-top: 5rem; margin-bottom: 5rem;">
            <v-text-field placeholder="Search query..." solo flat style="border: 1px solid #40BFFF; height: 50px;"></v-text-field><v-btn :ripple="false" flat height="50" style="background-color: #40BFFF; color: white;">Search</v-btn>
        </div>
        <FooterPage />
    </v-app>
</template>

<script>
    import FirstPage from '@/components/FirstPage'
import FooterPage from '@/components/FooterPage'
import NavBar from '@/components/NavBar'
import axios from 'axios'

    export default{
        data: () => ({
            products: [],
            tabsItem: [{
                name: 'All'
            },{
                name: 'Bags',
            },{
                name: 'Sneakers',
            },{
                name: 'Belt',
            },{
                name: 'Sunglassess',
            }],
            sectionPage: [{
                name: '01 Jan, 2015', title: 'Fashion Industry', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic. Atque, repellat?', image: require('@/assets/Nike_logo_emblem_logotype1.png'), 
            },{
                name: '01 Jan, 2015', title: 'Best Design Tools', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic. Atque, repellat?', image: require('@/assets/figma-1-logo1.png'),
            },{
                name: '01 Jan, 2015', title: 'HR Community', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic. Atque, repellat?', image: require('@/assets/kronos-logo-1-11.png'),
            }],  
            iconpage: [{
                icon: "@/assets/shipping.png",
                text: "FREE SHIPPING",
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },{
                icon: "@/assets/refund.png",
                text: "100% REFUND",
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },{
                icon: "@/assets/support.png",
                text: "24/7 SUPPORT",
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }]
        }),
        created() {
            this.getProducts()
        },
        methods: {
            getProducts() {
                axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    this.products = res.data
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        components: {
            NavBar,
            FirstPage,
            FooterPage,
        }
    }

</script>

<style scoped>
.tabs-item {
    text-transform: unset !important;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    width: unset !important;
    height: 100%;
    padding: 0;
    margin-right: 30px;
    white-space: nowrap;
  }

  .v-tab {
    min-width: unset !important;
  }
.tabs-item::before {
  background-color: transparent !important;
}
.cards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}
.prices{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>