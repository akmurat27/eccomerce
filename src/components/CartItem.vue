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
        <div class="Product">
            <h3>PRODUCT</h3>
            <div class="NavProduct">
                <h3>PRICE</h3>
                <h3>QTY</h3>
                <h3>UNIT PRICE</h3>
            </div>
        </div>
        <v-tabs-slider style="width: 80%; margin: auto; height: 3px; background-color: #F6F7F8;"></v-tabs-slider>
        <div class="Elements"
            v-for="(order, ind) in orders"
            :key="order.name"
        >
            <svg @click="orders.splice(0,1), del =! del" style="cursor: pointer" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.05" d="M11.8096 22.0319C18.3318 22.0319 23.6191 17.1071 23.6191 11.0319C23.6191 4.95679 18.3318 0.0319214 11.8096 0.0319214C5.28732 0.0319214 0 4.95679 0 11.0319C0 17.1071 5.28732 22.0319 11.8096 22.0319Z" fill="#FF6875"/>
                <path d="M16.6244 7.73903L15.8652 7.03192L7.51462 14.8101L8.27377 15.5172L16.6244 7.73903Z" fill="#FF4252"/>
                <path d="M15.8649 15.517L16.624 14.8099L8.27341 7.03173L7.51426 7.73884L15.8649 15.517Z" fill="#FF4252"/>
            </svg>
            <div v-if="del">Empty Item. Add Item</div>
            <v-img :src="order.img" width="137" height="94" contain></v-img>
            <h3>{{ order.name }}</h3>
            <div class="ProductElements">
                <h3>{{ order.price }}</h3>
                <div>
                    <v-row no-gutters>
                        <v-btn @click="countDown(ind)" elevation="0" tile :ripple="false" height="40" min-width="40" style="color: #33A0FF;font-size: 16px;">-</v-btn>
                        <div style="background-color: #F6F7F8; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">{{ order.count }}</div>
                        <v-btn @click="countUp(ind)" elevation="0" tile :ripple="false" height="40" min-width="40" style="color: #33A0FF;font-size: 16px;">+</v-btn>
                    </v-row>
                </div>
                <h3> ${{ order.price * order.count }}</h3>
            </div>
        </div>
        <v-tabs-slider style="width: 80%; margin: auto; height: 3px; background-color: #F6F7F8;"></v-tabs-slider>
        <div style="display: flex; margin-bottom: 7rem;">
            <div style="display: flex;  margin-top: 4rem; width: 369px; margin-left: 12rem;">
                <v-text-field placeholder="Voucher code" solo flat style="border: 3px solid #F1F3F4; height: 55px;"></v-text-field><v-btn :ripple="false" elevation="0" height="55" style="background-color: #40BFFF; color: white; text-transform: none; font-family: Poppins, sans-serif;">Redeem</v-btn>
            </div>
            <v-card flat tile style="display: flex; flex-direction: column; width: 32%; margin: auto; margin-top: 4rem; margin-right: 3rem;">
                <div style="display: flex;"><v-card-text style="font-size: 18px;">Subtotal</v-card-text><v-card-text style="font-size: 18px;">${{ totalPrice }}</v-card-text></div>
                <div style="display: flex;"><v-card-text style="font-size: 18px;">Shipping fee</v-card-text><v-card-text style="font-size: 18px;">$20</v-card-text></div>
                <div style="display: flex;"><v-card-text style="font-size: 18px;">Coupon</v-card-text><v-card-text style="font-size: 18px;">No</v-card-text></div>
                <v-tabs-slider style="width: 374px; margin-left: 1rem; height: 3px; background-color: #F6F7F8;" class="my-6"></v-tabs-slider>
                <div style="display: flex;"><v-card-text style="font-size: 30px;">Total</v-card-text><v-card-text style="font-size: 30px;">${{ totalPrice }}</v-card-text></div>
                
                <v-btn elevation="0" :ripple="false" @click="dialog = !dialog" width="374px" height="60px" style="margin-left: 1rem; background-color: #33A0FF; color: white; text-transform: none; font-size: 18px;">Click me</v-btn>
                <div>
                    <v-dialog
                        v-model="dialog"
                        width="1021"
                        persistent
                    >
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-card height="792px">
                                    <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin: auto;" class="py-5">
                                        <div @click="dialog = false" style="cursor: pointer">
                                            <v-img src="@/assets/Group 3.1.svg"></v-img>
                                        </div>
                                        <div @click="dialog = false" style="cursor: pointer">
                                            <v-img src="@/assets/times.svg"></v-img>
                                        </div>
                                    </div>
                                    <div class="py-3" style="color: #40BFFF; font-size: 32px; text-align: center;">
                                        Make Payment
                                    </div>

                                    <v-stepper non-linear flat style="width: 155px; margin: auto;">
                                        <v-stepper-header>
                                            <v-stepper-step
                                                step="1"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="2"
                                                style="width: 51.6px; margin: auto;  display: flex; align-items: center; justify-content: center;"
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="3"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                            >
                                            </v-stepper-step>
                                        </v-stepper-header>
                                    </v-stepper>
                                    <v-container fluid>
                                        <v-row style="width: 80%; margin: auto;">
                                            <v-col cols="12" sm="6">
                                                <v-text-field filled rounded style="border-radius: 10px; width: 380px; height: 50px;" placeholder="First Name" class="py-3"></v-text-field>
                                                <v-text-field filled rounded style="border-radius: 10px; width: 380px; height: 50px;" placeholder="Email Address" class="py-15"></v-text-field>
                                                <div class="py-3" style="color: #40BFFF; font-size: 20px; font-weight: 400; text-transform: capitalize;">Select Method of Payment</div>
                                                <v-list>
                                                    <v-list-item-group
                                                        mandatory
                                                    >
                                                        <v-list-item color="primary" :ripple="false">
                                                            <template v-slot:default="{ active }">
                                                                <div style="display: flex;">
                                                                    <v-img src="@/assets/Credit Card.svg"></v-img>
                                                                    <v-list-item-title class="mx-4">Credit Card Or Debit</v-list-item-title>
                                                                </div>

                                                                <v-list-item-action style="margin-left: 8rem;">
                                                                    <v-checkbox :input-value="active"></v-checkbox>
                                                                </v-list-item-action>
                                                            </template>
                                                        </v-list-item>
                                                        <v-list-item color="primary" :ripple="false">
                                                            <template v-slot:default="{ active }">
                                                                <div style="display: flex">
                                                                    <v-img src="@/assets/Paypal.svg"></v-img>
                                                                    <v-list-item-title class="mx-4">Paypal</v-list-item-title>
                                                                </div>

                                                                <v-list-item-action style="margin-left: 13.9rem;">
                                                                    <v-checkbox :input-value="active"></v-checkbox>
                                                                </v-list-item-action>
                                                            </template>
                                                        </v-list-item>
                                                        <v-list-item color="primary" :ripple="false">
                                                            <template v-slot:default="{ active }">
                                                                <div style="display: flex">
                                                                    <v-img src="@/assets/Bank.svg"></v-img>
                                                                    <v-list-item-title class="mx-4">Bank Transfer</v-list-item-title>
                                                                </div>

                                                                <v-list-item-action style="margin-left: 10.8rem;">
                                                                    <v-checkbox :input-value="active"></v-checkbox>
                                                                </v-list-item-action>
                                                            </template>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field filled rounded style="border-radius: 10px; width: 380px; height: 50px;" placeholder="Last Name" class="py-3"></v-text-field>
                                                <v-textarea filled rounded style="border-radius: 10px; width: 380px;" placeholder="Address for Delivery" class="pt-15"></v-textarea>
                                                <v-text-field filled rounded style="border-radius: 10px; width: 380px; height: 50px;" placeholder="Mobile Phone"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-btn
                                        :ripple="false"
                                        style="background-color:#33A0FF; color: white; width: 338px; height: 70px; font-size: 24px; text-transform: none; display: flex; margin: auto; "
                                        @click="step++"
                                        elevation="0"
                                        :disabled="step === 3"
                                        depressed
                                    >
                                        Go to Payment
                                    </v-btn>
                                </v-card>
                            </v-window-item>
                            <v-window-item :value="2">
                                <v-card height="792px">
                                    <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin: auto;" class="py-5">
                                        <div @click="step--" style="cursor: pointer">
                                            <v-img src="@/assets/Group 3.1.svg"></v-img>
                                        </div>
                                        <div @click="dialog = false" style="cursor: pointer">
                                            <v-img src="@/assets/times.svg"></v-img>
                                        </div>
                                    </div>
                                    <div class="py-3" style="color: #40BFFF; font-size: 32px; text-align: center;">
                                        Make Payment
                                    </div>

                                    <v-stepper v-model="e1" non-linear flat style="width: 155px; margin: auto;">
                                        <v-stepper-header>
                                            <v-stepper-step
                                                step="1"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="2"
                                                style="width: 51.6px; margin: auto;  display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="3"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                            >
                                            </v-stepper-step>
                                        </v-stepper-header>
                                    </v-stepper>
                                    <v-container fluid>
                                        <v-row style="width: 80%; margin: auto;" class="my-6">
                                            <v-col cols="12" sm="6">
                                                <v-img src="@/assets/CreditCard.png" width="339px" height="198px"></v-img>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field placeholder="Card Number" filled rounded style="border-radius: 10px; width: 336px; height: 50px; margin: auto;" class="pb-3"></v-text-field>
                                                <div style="display: flex;" class="my-8">
                                                    <v-text-field placeholder="Expiry" filled rounded style="border-radius: 10px; width: 50px; height: 50px; margin: auto;" class="mx-4"></v-text-field>
                                                    <v-text-field placeholder="CVV" filled rounded style="border-radius: 10px; width: 50px; height: 50px; margin: auto;" class="mx-4"></v-text-field>
                                                </div>
                                                <v-text-field placeholder="Holder Number" filled rounded style="border-radius: 10px; width: 336px; height: 50px; margin: auto;"></v-text-field>
                                                <v-row align="center" style="margin: 1rem" class="py-2">
                                                    <v-checkbox :input-value="active"></v-checkbox> <small style="text-align: center;" class="ml-2">Save this Credit card</small>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-btn
                                        :ripple="false"
                                        style="background-color:#33A0FF; color: white; width: 338px; height: 70px; font-size: 24px; text-transform: none; display: flex; margin: auto; "
                                        @click="step++"
                                        elevation="0"
                                        :disabled="step === 3"
                                        depressed
                                    >
                                        Confirm
                                    </v-btn>
                                </v-card>
                            </v-window-item>
                            <v-window-item :value="3">
                                <v-card height="792px">
                                    <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin: auto;" class="py-5">
                                        <div @click="step--" style="cursor: pointer">
                                            <v-img src="@/assets/Group 3.1.svg"></v-img>
                                        </div>
                                        <div @click="dialog = false" style="cursor: pointer">
                                            <v-img src="@/assets/times.svg"></v-img>
                                        </div>
                                    </div>
                                    <div class="py-3" style="color: #40BFFF; font-size: 32px; text-align: center;">
                                        Make Payment
                                    </div>
                                    <v-stepper v-model="e1" non-linear flat style="width: 155px; margin: auto;">
                                        <v-stepper-header>
                                            <v-stepper-step
                                                step="1"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="2"
                                                style="width: 51.6px; margin: auto;  display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>

                                            <v-divider></v-divider>

                                            <v-stepper-step
                                                step="3"
                                                style="width: 51.6px; margin: auto; display: flex; align-items: center; justify-content: center;"
                                                complete
                                            >
                                            </v-stepper-step>
                                        </v-stepper-header>
                                    </v-stepper>
                                    <v-container fluid style="display: flex; align-items: center; width: 130px; height: 129px; flex-direction: column;">
                                        <v-img src="@/assets/Success Icon.svg"></v-img>
                                        <div style="color: #223263; font-size: 24px; font-weight: 700;">Success</div>
                                    </v-container>
                                    <v-btn
                                        :ripple="false"
                                        style="background-color:#33A0FF; color: white; width: 338px; height: 70px; font-size: 24px; text-transform: none; display: flex; margin: auto; margin-top: 5rem;"
                                        elevation="0"
                                        @click="complete"
                                    >
                                        Complete
                                    </v-btn>
                                </v-card>
                            </v-window-item>
                        </v-window>
                    </v-dialog>
                </div>
            </v-card>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import FooterPage from './FooterPage.vue';
import NavBar from './NavBar.vue';
export default{
    data: () => ({
        alert: true,
        dialog: false,
        step: 1,
        Subtotal: 574,
        fee: 20,
        orders: [
            {
                img: require('@/assets/ProductPicture02.png'),
                name: 'Adidas',
                price: 449.0,
                count: 1,   
                // total_price: price * count
            },
            {
                img: require('@/assets/ProductPicture01.png'),
                name: 'Nike',
                price: 125.0,
                count: 1,
                // total_price: price * count
            },
        ],
    }),
    computed: {
        totalPrice() {
            let sum = 0
            for (let i = 0; i < this.orders.length; i++) {
                sum += this.orders[i].count * this.orders[i].price
            }
            return sum
        }
    },  
    components: {
        NavBar,
        FooterPage
    },
    methods: {
        countDown(ind) {
            if (this.orders[ind].count > 0) this.orders[ind].count -= 1
        },
        countUp(ind) {
            this.orders[ind].count += 1
        },
        complete(){
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
                }
            });
        },
    }
}
</script>

<style>
.Product{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
}
.NavProduct{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 42%;
    margin: 2rem;
}
.Elements{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.ProductElements{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin-left: 20rem;
}
</style>