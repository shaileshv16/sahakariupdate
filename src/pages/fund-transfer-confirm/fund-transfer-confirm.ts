import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ModalController, ModalOptions } from 'ionic-angular';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/app-data.service';
import { StorageService } from '../services/Storage_Service';
import { SelfCareAc } from '../LocalStorageTables/SelfCareAc';
import { FundTransferDone } from '../View Models/FundTransferDone';
import { findReadVarNames } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { CheckPasswordPage } from '../check-password/check-password';

/**
 * Generated class for the FundTransferConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fund-transfer-confirm',
  templateUrl: 'fund-transfer-confirm.html',
})
export class FundTransferConfirmPage implements OnInit {
  selfCareAC: SelfCareAc;
  navparams: any;
  showstatus: boolean;
  AcNo: string;
  HeadName: string;
  ToAcNo: string;
  ToName: string;
  confirm: string;
  ftd: FundTransferDone;
  showConfirm: boolean;
  showFailure: boolean;
  constructor(public modalCtrl: ModalController, private storageService: StorageService, private alertCtrl: AlertController, private toastr: ToastrService, public loadingController: LoadingController, private registerService: RegisterService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.navparams = this.navParams.data;
    this.HeadName = this.navParams.get('HeadName');
    this.AcNo = this.navParams.get('AcNo');
    this.ToName = this.navParams.get('ToName');
    this.ToAcNo = this.navParams.get('ToAcNo');
    this.showConfirm = true;
  }

  // GetSelfCareAcByTenantID(ActiveTenantId) {
  //   var AcSubId = this.navParams.get('AcSubId');
  //   var SelfCareACs = this.storageService.GetSelfCareAc();
  //   // this.selfCareAC=this.SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId&&obj.AcActId=="#SB"&&obj.AcSubId===this.AcSubId; });
  //   this.selfCareAC = SelfCareACs.find(function (obj) { return obj.TenantId === ActiveTenantId && obj.AcSubId === AcSubId; });
  //   return this.selfCareAC;

  // }


  // OnConfirm() {  //Fires, when clicking on Confirm button
  //   let ActiveTenantId = this.storageService.GetUser().ActiveTenantId;
  //   let loading = this.loadingController.create({
  //     content: 'Transferring the Fund..'
  //   });
  //   loading.present();
  //   const doFundTransfer = {
  //     TenantId: this.navparams.doFundTransfer.TenantId,
  //     DigiPartyId: this.navParams.get('doFundTransfer').DigiPartyId,
  //     FromAcMastId: this.navParams.get('doFundTransfer').FromAcMastId,
  //     FromAcSubId: this.navParams.get('doFundTransfer').FromAcSubId,
  //     FromLocId: this.navParams.get('doFundTransfer').FromLocId,
  //     ToAcMastId:this.navParams.get('doFundTransfer').ToAcMastId,
  //     ToAcSubId: this.navParams.get('doFundTransfer').ToAcSubId,
  //     ToLocId: this.navParams.get('doFundTransfer').ToLocId,
  //     Amount: this.navParams.get('doFundTransfer').Amount,
  //     ToAcNo:this.navParams.get('doFundTransfer').ToAcNo  
  //   }

  //   this.registerService.FundTransfer(doFundTransfer).subscribe((data: any) => {
  //     this.confirm = null;
  //     this.ftd=data;
  //     if(data.Status=="1"){
  //       this.toastr.success('Fund Transferred with Success', 'Success!');
  //       var alert = this.alertCtrl.create({
  //         title: "Success Message",
  //         subTitle: "Fund Transferred",
  //         buttons: ['OK']
  //       });
  //       alert.present(); 
  //       this.showstatus = true;
  //       this.showConfirm = false;
  //     }
  //     else{
  //       this.toastr.error(data.AISError, 'Error!');
  //       var alert = this.alertCtrl.create({
  //         title: "Error Message",
  //         subTitle: data.AISError,
  //         buttons: ['OK']
  //       });
  //       alert.present(); //Shows alert message of Error from server.
  //       this.showFailure=true;
  //       this.showConfirm = false;
  //     }
  //     loading.dismiss();
  //   }, (error) => {
  //     this.toastr.error(error.message, 'Error!');
  //     var alert = this.alertCtrl.create({
  //       title: "Error Message",
  //       subTitle: error.message,
  //       buttons: ['OK']
  //     });
  //     alert.present(); 
  //     loading.dismiss();
  //   });
  // }


  OnConfirm() {  //Fires, when clicking on Confirm button
    const doFundTransfer = {
      TenantId: this.navparams.doFundTransfer.TenantId,
      DigiPartyId: this.navParams.get('doFundTransfer').DigiPartyId,
      FromAcMastId: this.navParams.get('doFundTransfer').FromAcMastId,
      FromAcSubId: this.navParams.get('doFundTransfer').FromAcSubId,
      FromLocId: this.navParams.get('doFundTransfer').FromLocId,
      ToAcMastId: this.navParams.get('doFundTransfer').ToAcMastId,
      ToAcSubId: this.navParams.get('doFundTransfer').ToAcSubId,
      ToLocId: this.navParams.get('doFundTransfer').ToLocId,
      Amount: this.navParams.get('doFundTransfer').Amount,
      ToAcNo: this.navParams.get('doFundTransfer').ToAcNo
    }
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false,
      cssClass : 'mymodal'
    };
    let passwordModal = this.modalCtrl.create(CheckPasswordPage, { 'DoFundTransfer': doFundTransfer }, myModalOptions);
    passwordModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FundTransferConfirmPage');
  }

}
