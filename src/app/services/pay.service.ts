import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  travel = [
    {
      img : 'assets/imgs/pay/flight.png',
      name : 'Flight'
    },
    {
      img : 'assets/imgs/pay/train.png',
      name : 'Train'
    },
    {
      img : 'assets/imgs/pay/mobile.png',
      name : 'Recharge'
    },
    {
      img : 'assets/imgs/pay/doc.png',
      name : 'Postpaid'
    },
    {
      img : 'assets/imgs/pay/dth.png',
      name : 'DTH'
    },
    {
      img : 'assets/imgs/pay/bulb.png',
      name : 'Electricity'
    },
    {
      img : 'assets/imgs/pay/phone.png',
      name : 'Landline'
    },
    {
      img : 'assets/imgs/pay/gas.png',
      name : 'Gas'
    },
    {
      img : 'assets/imgs/pay/router.png',
      name : 'Broadband'
    },
    {
      img : 'assets/imgs/pay/data.png',
      name : 'Data Card'
    },
    {
      img : 'assets/imgs/pay/umbrella.png',
      name : 'Insurance'
    },
    {
      img : 'assets/imgs/pay/water.png',
      name : 'Water'
    },
  ];

  chip = [
    {
      img : 'assets/imgs/pay/send.png',
      name : 'Send Money'
    },
    {
      img : 'assets/imgs/pay/receive.png',
      name : 'Receive Money'
    },
    {
      img : 'assets/imgs/pay/bank.png',
      name : 'Bank Transfer'
    },
    {
      img : 'assets/imgs/pay/qr.png',
      name : 'ScanQR Code'
    },
    {
      img : 'assets/imgs/pay/user.png',
      name : 'To Self'
    },
    {
      img : 'assets/imgs/pay/balance.png',
      name : 'check Balance'
    },
    {
      img : 'assets/imgs/pay/book.png',
      name : 'Account Passbook'
    },
    {
      img : 'assets/imgs/pay/set.png',
      name : 'Account Setting'
    }
  ];

  constructor() { }
}
