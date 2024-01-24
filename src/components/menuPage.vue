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
                                <v-text-field style="font-size: 18px; font-weight: 600;"
                                    solo
                                    flat
                                    :value="range[0]"
                                    hide-details
                                    @change="$set(range, 0, $event)"
                                    prefix="$"
                                >
                                </v-text-field>
                                <v-text-field style="font-size: 18px; font-weight: 600"
                                    solo
                                    flat
                                    :value="range[1]"
                                    hide-details
                                    @change="$set(range, 1, $event)"
                                    prefix="$"
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
                        >
                            <v-list-item
                                :ripple="false"
                                style="padding: 0"
                            >
                                <router-link to="/productlist"><v-icon style="background-color: #F1F3F4; width: 55px; height: 58px; color: #C1C8CE">mdi-apps</v-icon></router-link> 
                                <v-icon style="width: 55px; text-align: center; color: #40BFFF;">mdi-menu</v-icon>        
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>                                         
                </div>
                <div   
                    v-for="(products, id) in productsItems"
                    :key="id"
                    style="margin-bottom: 40px;"
                >
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            class="mb-10 d-flex"
                            height="321"
                            flat    
                            style="margin: auto; width: 97%; margin-top: 20px;"
                        >
                            <router-link to="/productlistitem" style="text-decoration: none;">
                                <v-img
                                    height="300"
                                    width="350px"
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
                                <v-card-title style="padding-top: 0; padding-bottom: 0; color: #22262A; font-family: Poppins, sans-serif; font-size: 24px; font-style: normal; font-weight: 700; line-height: 150%; /* 27px */ letter-spacing: 0.5px;">{{ products.title }}</v-card-title>
                                <div style="display: flex; align-items: center; padding: 16px; padding-top: 0;">
                                    <v-rating :value="products.rating" size="20" color="#FFC600" readonly background-color="#C1C8CE" style="text-align: center;"></v-rating>
                                    <v-card-subtitle style="color: #C1C8CE; font-size: 18px">0 reviews</v-card-subtitle>
                                    <v-card-subtitle style="color: #33A0FF; font-size: 18px">Submit a review</v-card-subtitle>
                                </div>
                                <div>
                                    <v-tabs-slider style="background-color: #F6F7F8; width: 470px; height: 2px; margin-left: 16px;"></v-tabs-slider>
                                </div>
                                <div class="prices">
                                    <v-card-title style="color: #40BFFF; font-family: Poppins, sans-serif; font-size: 24px; font-style: normal; font-weight: 700; line-height: 180%; /* 32.4px */ letter-spacing: 0.5px;"> {{ products.priceFirst }}</v-card-title>
                                    <v-card-title style="color: #9098B1; text-decoration: line-through;">{{ products.priceSecond }}</v-card-title>
                                    <v-card-title style="color: #FB7181">{{ products.priceThird }}</v-card-title>
                                </div>
                                <v-card-text v-text="products.text" style="font-size: 18px; padding-top: 0;"></v-card-text>
                                <v-row no-gutters align="center">
                                    <v-btn :ripple="false" text style="background-color: #dcf2fd; margin: 1rem; letter-spacing: 2px; font-size: 13px;" elevation="0" width="180" height="50">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4061 12.4476C14.8962 12.4467 15.3708 12.2758 15.7491 11.9641C16.1274 11.6523 16.3859 11.2189 16.4806 10.7378L17.5433 5.42111C17.6049 5.11296 17.5974 4.79497 17.5215 4.49005C17.4455 4.18513 17.303 3.90085 17.1041 3.65763C16.9052 3.41442 16.655 3.21826 16.3713 3.08339C16.0876 2.94852 15.7776 2.87825 15.4635 2.87759H4.88284V1.81426C4.88284 1.53225 4.77085 1.2618 4.57155 1.06239C4.37225 0.862975 4.10195 0.750931 3.82009 0.750931H1.70417C1.42231 0.750931 1.15198 0.862975 0.952676 1.06239C0.753373 1.2618 0.641422 1.53225 0.641422 1.81426C0.641422 2.09627 0.753373 2.36672 0.952676 2.56613C1.15198 2.76555 1.42231 2.87759 1.70417 2.87759H2.76691V13.5109C2.34613 13.509 1.93425 13.6321 1.58345 13.8647C1.23266 14.0972 0.958725 14.4287 0.796384 14.8171C0.634043 15.2055 0.59059 15.6334 0.67152 16.0466C0.752449 16.4597 0.954119 16.8396 1.25099 17.1379C1.54786 17.4363 1.92657 17.6398 2.33913 17.7226C2.75169 17.8055 3.17957 17.764 3.56851 17.6033C3.95745 17.4426 4.28996 17.17 4.52394 16.8201C4.75792 16.4701 4.88283 16.0586 4.88284 15.6376H12.2891C12.2908 16.0561 12.4164 16.4648 12.65 16.812C12.8836 17.1592 13.2149 17.4294 13.6018 17.5884C13.9888 17.7474 14.4142 17.7882 14.8243 17.7055C15.2344 17.6228 15.6108 17.4204 15.906 17.1238C16.2012 16.8272 16.402 16.4498 16.483 16.0392C16.564 15.6285 16.5216 15.2031 16.3611 14.8165C16.2006 14.43 15.9293 14.0996 15.5813 13.8673C15.2334 13.6349 14.8244 13.5109 14.4061 13.5109H4.88284V12.4476H14.4061ZM15.4688 5.00425L14.4061 10.3209H4.88284V5.00425H15.4635H15.4688Z" fill="#33A0FF"/>
                                        </svg>
                                        <div style="color: #33A0FF; text-transform: none !important;letter-spacing: normal;font-size: 18px;font-weight: 400; display: flex; align-items: center; margin: 10px;">Add To Cart</div>
                                    </v-btn>
                                    <v-btn 
                                        :ripple="false" 
                                        elevation="0" 
                                        style="background-color: #dcf2fd" height="50" width="50"
                                        @click="liked = !liked"
                                    >
                                        <v-icon v-if="liked" color="#33A0FF">mdi-heart</v-icon>
                                        <v-icon v-else color="#33A0FF">mdi-heart-outline</v-icon>
                                    </v-btn>
                                </v-row>
                            </div>
                        </v-card>
                    </v-hover>
                    <v-divider style="margin-left: 16px"></v-divider>
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
        liked: false,
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
                image: require('@/assets/pictures(1).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off',
                text: 'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...'
            },
            {
                image: require('@/assets/pictures(2).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off',
                text: 'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...'
            },
            {
                image: require('@/assets/pictures(3).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off',
                text: 'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...'
            },
            {
                image: require('@/assets/pictures(4).png'),
                title: 'Nike Air Max 270 React',
                rating: '4',
                priceFirst: '$299,43',
                priceSecond: '$534,33',
                priceThird: '24% Off',
                text: 'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...'
            },
        ],
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
        flex-direction: column;
        padding: 16px;
        padding-top: 0;
    }
    .prices{
        display: flex;
        align-items: center;        
    }
</style>