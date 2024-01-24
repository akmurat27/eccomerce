<template>
    <div>
        <NavBar />
        <v-card flat>
            <v-list style="background-color: #F6F7F8; padding: 0;" flat>
                <v-list-item-group v-model="model" color="primary" style="display: flex; justify-content: space-evenly; align-items: center; width: 20%; margin: auto;"> 
                    <v-list-item :ripple="false">
                        <v-list-item-title style="text-align: center;"> Home  </v-list-item-title>
                    </v-list-item>
                    /
                    <v-list-item :ripple="false">
                        <v-list-item-title> Hot Deal </v-list-item-title>
                    </v-list-item>
                    /
                    <v-list-item :ripple="false">
                        <v-list-item-title> Nike Airmax 270 React </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="4" md="4" xs="4">
                    <v-img @click="dialog = !dialog" :src="products.image" height="350" style="margin-top: 2rem; cursor: pointer;" contain></v-img>
                    <v-dialog v-model="dialog" width="500">
                        <v-img @click="dialog = !dialog" :src="products.image" style="cursor: pointer;"></v-img>
                    </v-dialog>
                    <v-slide-group
                        v-model="imgSlide"
                        center-active
                        width="100%"
                        active-class="bordered-slide"
                        style="padding-top: 150px; padding-left: 100px;"
                        mandatory
                    >
                        <v-slide-item
                            :class="index == products.length - 1 ? 'mx-0' : 'mr-4'"
                            v-slot="{ active, toggle }"
                        >
                            <v-card
                                :color="active ? 'blue' : '#FFFFFF'"
                                @click="toggle"
                                flat
                                style="border: 4px solid white"
                            >
                                <v-img 
                                    :src="products.image" 
                                    height="86" 
                                    width="85"
                                    @click="changeThumbnail(products.image)"
                                    style="border: 3px solid #E5E8EA;"
                                />
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
                <v-col cols="12" sm="4" md="4" xs="4">
                    <div flat style="display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; margin-top: 1rem;">
                        <v-card-title style="color: #22262A; font-size: 24px;">{{ products.title }}</v-card-title>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <v-rating readonly color="#FFC600" background-color="#C1C8CE" :value="products.rating.rate" size="15"></v-rating>
                            <v-card-subtitle style="color: #C1C8CE; font-size: 18px">0 reviews</v-card-subtitle>
                            <v-card-subtitle style="color: #33A0FF; font-size: 18px">Submit a review</v-card-subtitle>
                        </div>
                        <v-tabs-slider color="#F6F7F8" style="width: 500px; height: 5px; margin-left: 1rem;"></v-tabs-slider>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <v-card-subtitle style="padding: 13px; color: #40BFFF; font-family: Poppins, sans-serif; font-size: 24px; font-style: normal; font-weight: 800; line-height: 180%; /* 32.4px */ letter-spacing: 0.5px;">Price: {{ products.price }}</v-card-subtitle>
                        </div>
                        <div style="display: flex;"><v-card-subtitle style=" margin-right: 70px; font-size: 18px;">Description: {{ products.description }}</v-card-subtitle></div>
                        <div style="display: flex;"><v-card-subtitle style=" margin-right: 83px; font-size: 18px;">Category: {{ products.category }}</v-card-subtitle></div>
                        <v-card-subtitle style="font-size: 18px;">Free shipping</v-card-subtitle>
                        <v-tabs-slider color="#F6F7F8" style="width: 500px; height: 5px; margin-left: 1rem;"></v-tabs-slider>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <v-card-subtitle style="width: 100%;">Select Color: </v-card-subtitle>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-chip-group mandatory style="margin-left: 5rem;">
                                        <v-chip color="blue" class="px-4 mr-3" :ripple="false"></v-chip>
                                        <v-chip color="red" class="px-4 mr-3" :ripple="false"></v-chip>
                                        <v-chip color="yellow" class="px-4 mr-3" :ripple="false"></v-chip>
                                        <v-chip color="black" class="px-4 mr-3" :ripple="false"></v-chip>
                                    </v-chip-group>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                        <div style="display: flex;"><v-card-subtitle>Size</v-card-subtitle><v-select :items="sizes" solo flat style="border: 3px solid #F1F3F4; height: 55px; width: 130px; margin-left: 9rem;"></v-select></div>
                        <v-tabs-slider color="#F6F7F8" style="width: 500px; height: 5px; margin-left: 1rem; margin-top: 2rem;"></v-tabs-slider>
                        <v-row no-gutters style="display: flex; align-items: center; width: 88%;">
                            <v-row no-gutters style="margin-left: 1rem;">
                                <v-btn @click="countDown" elevation="0" tile :ripple="false" height="40" min-width="40" style="color: #33A0FF;font-size: 16px;">-</v-btn>
                                <div style="background-color: #F6F7F8; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">{{ count }}</div>
                                <v-btn @click="countUp" elevation="0" tile :ripple="false" height="40" min-width="40" style="color: #33A0FF;font-size: 16px;">+</v-btn>
                            </v-row>
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
                        <v-tabs-slider color="#F6F7F8" style="width: 500px; height: 5px; margin-left: 15px;"></v-tabs-slider>
                        <div style="display: flex; justify-content: center; align-items: center" class="py-8">
                            <v-btn elevation="0" :ripple="false" style="background-color: #385C8E; color: white" width="244" height="50" class="mx-2"> 
                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.833788 8.89243H2.59581V16.1529C2.59581 16.2217 2.62314 16.2877 2.67177 16.3363C2.7204 16.385 2.78635 16.4123 2.85512 16.4123H5.84355C5.91232 16.4123 5.97827 16.385 6.0269 16.3363C6.07553 16.2877 6.10286 16.2217 6.10286 16.1529V8.92646H8.1295C8.19305 8.92636 8.25436 8.90291 8.30177 8.86057C8.34918 8.81823 8.3794 8.75994 8.38669 8.69678L8.69488 6.02357C8.69907 5.98726 8.69556 5.95047 8.68455 5.91562C8.67354 5.88077 8.6553 5.84864 8.63102 5.82133C8.60674 5.79403 8.57696 5.77216 8.54365 5.75717C8.51033 5.74218 8.47422 5.7344 8.43769 5.73434H6.09966V4.05959C6.09966 3.55451 6.37174 3.29825 6.90736 3.29825H8.43344C8.50222 3.29825 8.56817 3.27091 8.6168 3.22226C8.66543 3.1736 8.69275 3.10761 8.69275 3.0388V0.585691C8.69333 0.517243 8.66684 0.451343 8.61907 0.402348C8.57129 0.353352 8.50609 0.325232 8.43769 0.324112L6.33241 0.324112H6.2357C5.26625 0.327535 4.33052 0.680516 3.60011 1.31833C3.25544 1.6197 2.99099 2.00202 2.83054 2.43094C2.67008 2.85986 2.61864 3.32195 2.68083 3.77568V5.7354H0.830593C0.76182 5.7354 0.695867 5.76274 0.647237 5.81139C0.598608 5.86005 0.571289 5.92604 0.571289 5.99486V8.63298C0.571286 8.66732 0.578094 8.70132 0.591324 8.73301C0.604555 8.7647 0.623947 8.79344 0.648364 8.81758C0.672782 8.84171 0.701742 8.86076 0.733572 8.87361C0.765402 8.88646 0.799468 8.89285 0.833788 8.89243Z" fill="white"/>
                                </svg>
                                <div style="font-size: 16px; font-family: Poppins, sans-serif; letter-spacing: 1px; margin-left: 16px; text-transform: none;">Share on Facebook</div> 
                            </v-btn>
                            <v-btn elevation="0" :ripple="false" style="background-color: #03A9F4; color: white;" width="244" height="50" class="mx-2"> 
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8627 1.53895C17.2128 1.79428 16.5254 1.96403 15.8218 2.04296C16.5636 1.64691 17.1184 1.01962 17.3808 0.279969C16.6871 0.650397 15.9281 0.911475 15.1368 1.05195C14.6512 0.584038 14.0203 0.25855 13.3264 0.117836C12.6325 -0.0228783 11.9076 0.0276939 11.2461 0.262973C10.5845 0.498253 10.017 0.907345 9.61719 1.43702C9.21743 1.9667 9.004 2.59244 9.00466 3.23283C9.00207 3.47728 9.0298 3.72123 9.08733 3.96014C7.67787 3.89784 6.29888 3.56843 5.04051 2.99345C3.78213 2.41847 2.67271 1.61087 1.78477 0.623425C1.32876 1.32511 1.18752 2.15707 1.3899 2.94935C1.59229 3.74164 2.12304 4.43446 2.87372 4.8863C2.31304 4.8729 1.76417 4.73833 1.27337 4.49393V4.52902C1.27413 5.26513 1.55632 5.97857 2.07252 6.54942C2.58872 7.12028 3.30746 7.51375 4.10794 7.66371C3.80471 7.73611 3.49214 7.77187 3.17844 7.77004C2.9533 7.77372 2.72839 7.75554 2.50759 7.71581C2.73624 8.34844 3.17696 8.90178 3.76914 9.29973C4.36132 9.69769 5.07588 9.92072 5.81459 9.93816C4.56194 10.8193 3.01776 11.2977 1.42809 11.2971C1.14467 11.2989 0.861424 11.2843 0.580078 11.2535C2.19952 12.1929 4.08651 12.69 6.01301 12.6847C7.33964 12.6931 8.65489 12.464 9.88236 12.0108C11.1098 11.5577 12.2251 10.8895 13.1633 10.045C14.1015 9.20052 14.844 8.19663 15.3476 7.09163C15.8512 5.98663 16.1059 4.80256 16.097 3.60818C16.097 3.46676 16.097 3.33065 16.084 3.19561C16.7839 2.74544 17.3867 2.18402 17.8627 1.53895Z" fill="white"/>
                                </svg>
                                <div style="font-size: 16px; font-family: Poppins, sans-serif; letter-spacing: 1px; margin-left: 16px; text-transform: none;">Share on Twitter</div> 
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="3" md="3" xs="3">
                    <div style="margin: 2rem;">
                        <div style="color: #C1C8CE; margin-bottom: 3rem; font-size: 22px; font-weight: 400; line-height: normal;">BEST SELLER</div>
                        <v-carousel
                            :show-arrows="false"
                            cycle
                            interval="1000"
                        >
                            <v-carousel-item
                                v-for="(image, i) in imagesItem"
                                :key="i"
                            >
                                <v-card flat width="320" height="400" style="border: 5px solid #F6F7F8; display: flex; justify-content: center; align-items: center; flex-direction: column; cursor: pointer;">
                                    <v-img :src="image.image" width="320"></v-img>
                                    <v-rating readonly color="#FFC600" background-color="#C1C8CE" value="4" size="15" class="pt-5"></v-rating>
                                    <div style="display: flex;">
                                        <v-card-title style="color: #FF4858;">$499</v-card-title>
                                        <v-card-title style="color: #C1C8CE; text-decoration: line-through;">$599</v-card-title>
                                    </div>
                                </v-card>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </v-col>
            </v-row>
            <v-card width="1050" height="387" flat tile style="background-color: #FAFAFB; margin-left: 4rem; margin-top: 2rem;">
                <v-tabs v-model="tab" background-color="#FAFAFB">
                    <v-tab v-for="item in basil" :key="item" class="mx-10 tabs-item" :ripple="false">{{ item }}</v-tab>
                </v-tabs>
                <v-tabs-slider color="#E5E8EA" style="width: 965px; height: 3px;"></v-tabs-slider>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in basil" :key="item">
                        <v-card style="background-color: #FAFAFB; padding-left: 25px; padding-right: 15rem;">
                            <v-card-text>{{ text }}</v-card-text>
                            <v-card-text>{{ text1 }}</v-card-text>
                            <v-card-text>{{ text2 }}</v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
            <div style="font-size: 35px; font-weight: 600; color: #22262A; text-align: center; margin-top: 2rem;">RELATED PRODUCTS</div>
            <v-row n-gutters>
                <v-card v-for="(itemImage, i) in imageItem" :key="i" width="400" style="cursor: pointer; margin: 20px; border: 4px solid #E5E8EA; margin-top: 5rem; margin-bottom: 100px" flat>
                    <v-img :src="itemImage.image"></v-img>
                    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                        <v-card-title style="color: #223263; font-size: 22px">{{ itemImage.title }}</v-card-title>
                        <v-rating :value="itemImage.rating" readonly color="#FFC600" background-color="#C1C8CE"></v-rating>
                        <div style="display: flex;">
                            <v-card-text style="color: #40BFFF; font-size: 24px; font-weight: 800;">{{ itemImage.priceFirst }}</v-card-text>
                            <v-card-text style="color: #9098B1; font-size: 18px; font-weight: 500; text-decoration: line-through">{{ itemImage.priceSecond }}</v-card-text>
                            <v-card-text style="color: #FB7181; font-size: 18px; font-weight: 500;">{{ itemImage.priceThird }}</v-card-text>
                        </div>
                    </div>
                </v-card>
            </v-row>
        </v-container>
        <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/components/FooterPage'
import NavBar from '@/components/NavBar'
import axios from 'axios'
export default {
    data: () => ({
        liked: false,
        tab: null,
        basil:
        [   
            'Product Information', 
            'Reviews',
            'Another tab'
        ],
        text: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
        text1: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
        text2: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
        model: 0,
        // thumbnail: {},
        sizes: ['xs','s','m','l','xl','xxl'],
        products: {},
        imagesItem: [{
            image: require("@/assets/krasovka.png"),
        },{
            image: require("@/assets/ProductPicture01.png"),
        },{
            image: require("@/assets/ProductPicture02.png"),
        },{
            image: require("@/assets/ProductPicture03.png"),
        }],
        imageItem: [{
            image: require("@/assets/img1.png"),
            rating: "4",
            title: 'Nike Air Max 270 React',
            priceFirst: '$299,43',
            priceSecond: '$534,33',
            priceThird: '24% Off'
        },{
            image: require("@/assets/ProductPicture01.png"),
            rating: "4",
            title: 'Nike Air Max 270 React',
            priceFirst: '$299,43',
            priceSecond: '$534,33',
            priceThird: '24% Off'
        },{
            image: require("@/assets/ProductPicture02.png"),
            rating: "4",
            title: 'Nike Air Max 270 React',
            priceFirst: '$299,43',
            priceSecond: '$534,33',
            priceThird: '24% Off'
        },{
            image: require("@/assets/ProductPicture03.png"),
            rating: "4",
            title: 'Nike Air Max 270 React',
            priceFirst: '$299,43',
            priceSecond: '$534,33',
            priceThird: '24% Off'
        }],
        count: 0,
        imgSlide: 0,
        dialog: false,
    }),
    created() {
        this.getProductDetail(),
        this.getProducts()
    },
    methods: {
        countDown() {
            if (this.count > 0) this.count -= 1
        },
        countUp() {
            this.count += 1
        },
        changeThumbnail(src) {
            this.thumbnail = src
        },

        getProductDetail() {
            let param_id = this.$route.params.id
            axios.get('https://fakestoreapi.com/products/' + param_id)
            .then((res) => {
                this.products = res.data
                console.log(this.products)
            })
            .catch((err) => {
                console.log(err)
            })
        },

        getProducts() {
            axios.get('https://fakestoreapi.com/products/')
            .then(() => {
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    components: {
        FooterPage,
        NavBar,
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
</style>