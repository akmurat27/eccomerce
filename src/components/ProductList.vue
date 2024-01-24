<template>
    <div>
        <NavBar />
        <v-card tile flat>
            <v-list style="background-color: #F6F7F8; padding: 0;" flat>
                <v-list-item-group
                    v-model="model"
                    color="primary"
                    style= "width: 15%; display: flex; align-items: center; margin: auto;"
                >
                    <v-list-item :ripple="false" style=" justify-content: end">   
                        Home
                    </v-list-item>
                    /
                    <v-list-item :ripple="false">   
                        Hot Deals
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <div style="width: 80%; margin: auto; display: flex; margin-top: 2rem;">
            <div style="width: 22%;">
                <v-card 
                    class="deals"
                    tile 
                    flat
                >
                    <v-list style="background-color: #F6F7F8" flat>
                        <v-list-item-title style="font-size: 18px; font-weight: 600; cursor: pointer;" class="my-2 mx-4">Hot Deals</v-list-item-title>
                        <v-list-item-group
                            color="primary"
                            v-model="ItemSelected"
                        >
                            <v-list-item
                                v-for="(item, i) in itemsFirst"
                                :key="i"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title style="text-align: end;" v-text="item.number"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
                <v-card flat class="deals my-8" height="130">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title style="font-size: 18px; font-weight: 600;" class="my-2">PRICES</v-list-item-title>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <v-list-item-subtitle style="font-size: 18px;">Ranger:</v-list-item-subtitle>
                                <v-text-field style="font-size: 18px; font-weight: 600;background-color: transparent !important;"
                                    solo
                                    flat
                                    :value="range[0]"
                                    hide-details
                                    @change="$set(range, 0, $event)"
                                    prefix="$"
                                    background-color="transparent"
                                >
                                </v-text-field>
                                <v-text-field style="font-size: 18px; font-weight: 600"
                                    solo
                                    flat
                                    :value="range[1]"
                                    hide-details
                                    @change="$set(range, 1, $event)"
                                    prefix="$"
                                    background-color="transparent"
                                >
                                </v-text-field>
                            </div>
                            <v-range-slider 
                                v-model="range"
                                :max="max"
                                :min="min"
                                hide-details
                                :track-color="ex2.color"
                            ></v-range-slider>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card flat class="deals my-8">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title style="font-size: 18px; font-weight: 600;" class="my-2">COLOR</v-list-item-title>
                            <v-chip-group mandatory>
                                <v-chip color="blue" class="px-4 mr-3" :ripple="false"></v-chip>
                                <v-chip color="red" class="px-4 mr-3" :ripple="false"></v-chip>
                                <v-chip color="yellow" class="px-4 mr-3" :ripple="false"></v-chip>
                                <v-chip color="black" class="px-4 mr-3" :ripple="false"></v-chip>
                                <v-chip color="purple" class="px-4 mr-3" :ripple="false"></v-chip>
                                <v-chip color="pink" class="px-4 mr-3" :ripple="false"></v-chip>
                            </v-chip-group>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card 
                    class="deals my-8"
                    tile 
                    flat
                >
                    <v-list style="background-color: #F6F7F8" flat>
                        <v-list-item-title style="font-size: 18px; font-weight: 600; cursor: pointer;" class="my-2 mx-4">BRAND</v-list-item-title>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <v-list-item
                                v-for="(item, i) in itemsItem"
                                :key="i"
                            >
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title style="text-align: end;" v-text="item.number"></v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
                <v-btn style="background-color: #F6F7F8; font-size: 18px; font-weight: 600; width: 90%;" height="50" elevation="0" class="deals" :ripple="false">MORE</v-btn>
            </div>
            <div style="width: 80%;">
                <div style="background-color: #40BFFF; height: 350px; display: flex; margin: 1rem;"> 
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; margin-left: 6rem;">
                        <h1 style="color: #FFFFFF; font-size: 35px; margin-bottom: 1rem;">Adidas Men Running <br /> Sneakers</h1>
                        <p style="color: #FFFFFF; font-size: 16px; margin-bottom: 1rem;">Performance and design. Taken right to the edge.</p>
                        <h3 style="color: #FFFFFF; font-size: 13px;">SHOP NOW</h3>
                        <v-tabs-slider style="width: 38px; background-color:  white; height: 3px;"></v-tabs-slider>
                    </div>
                    <v-img src="@/assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 12.png" style="position: relative; bottom: 10%;" contain></v-img>
                </div>
                <div style="margin: 1rem; background-color: #F6F7F8; height: 58px; display: flex; align-items: center; justify-content: space-between; margin-top: 23px;">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <h3 style="margin-left: 25px;">13 Items</h3>
                        <h3 style="margin-left: 48px;">Sort By</h3>
                        <v-select outlined dense :items="names" style="height: 42px; margin: 0; padding: 0; margin-left: 15px; width: 150px;" />
                        <h3 style="margin-left: 57px;">Show</h3>
                        <v-select outlined :items="items" dense style="height: 42px; width: 150px; margin: 0; padding: 0; margin-left: 15px;" />
                    </div>  
                    <v-list flat style="background-color: transparent;">
                        <v-list-item-group
                            mandatory
                            color="#40BFFF"
                        >
                            <v-list-item
                                :ripple="false"
                                style="padding: 0"
                            >
                                <div>
                                    <v-icon style="background-color: #F1F3F4; width: 55px; height: 58px">mdi-apps</v-icon>
                                    <router-link to="/menuPage" style="text-decoration: none; text-align: center; color: #C1C8CE;"><v-icon style="width: 55px;">mdi-menu</v-icon></router-link>
                                </div>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>                                         
                </div>
                <div style="margin-top: 30px;">
                    <v-row no-gutters>
                        <v-col cols="12" md="4" sm="4" xs="4" 
                            v-for="(products, id) in productsItems"
                            :key="id"
                        >
                            <v-hover v-slot="{ hover }">
                                <v-card 
                                    class="mb-10"
                                    height="425"
                                    style="width: 380px; margin: 10px; border: 3px solid #F6F7F8"
                                    flat
                                >
                                    <router-link :to="'/productlistitem/' + id" style="text-decoration: none;">
                                        <v-img
                                            height="279"
                                            width="100%"
                                            :src="products.image"
                                        >
                                            <div style="cursor: pointer; height: 50px; width: 80px; color: white; background-color: #FF4858; text-align: center;position: absolute; z-index: 99;"><h1 style="font-family: Proxima Nova, sans-serif;">HOT</h1></div>
                                            <v-expand-transition>
                                                <div
                                                    v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out white"
                                                    style="height: 100%;"
                                                >   
                                                    <div style="display: flex; justify-content: center; align-items: center; margin-left: 5.6rem;">
                                                        <v-btn fab elevation="0" large style="border: 5px solid #F6F7F8; margin: 10px;"> <v-icon color="blue"> mdi-heart-outline</v-icon> </v-btn>
                                                        <v-btn fab elevation="0" large style="border: 5px solid #F6F7F8; margin: 10px;"> <v-icon color="blue"> mdi-cart-outline </v-icon></v-btn>
                                                    </div>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </router-link>
                                    <div class="cards">
                                        <v-card-title style="padding: 0; padding-top: 10px; color: #223263; font-family: Poppins, sans-serif; font-size: 23px; font-style: normal; font-weight: 700; line-height: 150%; /* 27px */ letter-spacing: 0.5px;">{{ products.title }}</v-card-title>
                                        <v-rating :value="products.rating" size="20" color="#FFC600" readonly background-color="#C1C8CE" style="text-align: center;"></v-rating>
                                        <div class="prices">
                                            <v-card-title style="padding-top: 0; color: #40BFFF; font-family: Poppins, sans-serif; font-size: 24px; font-style: normal; font-weight: 700; line-height: 180%; /* 32.4px */ letter-spacing: 0.5px;"> {{ products.priceFirst }}</v-card-title>
                                            <v-card-title style="padding-top: 0; color: #9098B1; text-decoration: line-through;">{{ products.priceSecond }}</v-card-title>
                                            <v-card-title style="padding-top: 0; color: #FB7181">{{ products.priceThird }}</v-card-title>
                                        </div>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </div>
                
                <v-card
                    height="60px"
                    style="margin: 1rem; margin-bottom: 155px;"
                    tile 
                    flat
                >
                    <v-list style="background-color: #F6F7F8; padding: 0;">
                        <v-list-item-group
                            v-model="chooseItem"
                            mandatory
                            style="display: flex; width: 300px; height: 60px; margin: auto; text-align: center;"
                        >
                            <v-list-item
                                v-for="(item, i) in itemsSecond"
                                :key="i"
                                color="primary"
                                :ripple="false"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </div>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import FooterPage from './FooterPage.vue';
import NavBar from './NavBar';
export default {
    data: () => ({
        chooseItem: 2,
        selectedItem: 0,
        itemsItem: [
            { text: 'Nike', number: '99' },
            { text: 'Nike', number: '99'},
            { text: 'Adidas', number: '99'},
            { text: 'Siemens', number: '99'},
        ],
        itemsFirst: [
            { text: 'Nike', number: '2' },
            { text: 'Airmax', number: '14'},
            { text: 'Nike', number: '48'},
            { text: 'Adidas', number: '15'},
            { text: 'Vans', number: '23'},
            { text: 'All Stars', number: '1'},
            { text: 'Adidas', number: '95'}
        ],
        names: ['Name', 'Age', 'Birth', 'Surname'],
        items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        sizes: ['04', '06', '08', '10', '12', '14',], 
        itemsSecond: [
            { text: '1'},
            { text: '2'},
            { text: '3'},
            { text: '4'},
            { text: '5'}
        ], 
        model: 0,
        ItemSelected: 1,
        ItemHome: 0,

        productsItems: [
            {  
                image: require('@/assets/img1.png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(1).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(2).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(3).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(4).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(5).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(6).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(7).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
            {
                image: require('@/assets/imageProduct(8).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off'
            },
        ],
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
            min: 10,
            max: 25,
            range: [13,99, 25,99],       
            ex2: { label: 'track-color', color: '#22262A' }, 
    }), 
    components: {
        NavBar,
        FooterPage
    }
  }
</script>

<style scoped>
    .btn::before {
        background-color: transparent !important;
    }
    .nav_1{
        width: 100%;
        height: 60px;
        background-color: #F6F7F8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
    .deals{
        background-color: #F6F7F8;
        margin: 1rem;
    }
    .cards{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .prices{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
    }
</style>