import { MenuAdmin } from "src/app/interfaces/menu-admin";

export const menuItemsSuperAdmin: MenuAdmin[] = [

    // Parent Dashboard
    {
      id: 'D001',
      title: 'Dashboard',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: 'dashboard',
      href: null,
      target: null
    },
    // Parent Account
    {
      id: 'acc-00',
      title: 'Account',
      icon: 'account_balance',
      hasSubMenu: true,
      parentId: null,
      routerLink:null,
      href: null,
      target: null
    },
    //child Account
    
    {
        id: 'acc-01',
      title: 'Account Statement',
      icon: 'account_balance_wallet',
      hasSubMenu: false,
      parentId: 'acc-00',
      routerLink: 'account/account-statement',
      href: null,
      target: null
    },
    {
        id: 'acc-02',
      title: 'Chart Of Accounts',
      icon: 'bar_chart',
      hasSubMenu: false,
      parentId: 'acc-00',
      routerLink: 'account/chart-of-accounts',
      href: null,
      target: null
    },
    {
        id: 'acc-03',
      title: 'Payment Methods',
      icon: 'payment',
      hasSubMenu: false,
      parentId: 'acc-00',
      routerLink: 'account/payment-methods',
      href: null,
      target: null
    },
    //parent Courier Service
     
     {
        id: 'cour-00',
        title: 'Courier Service',
        icon: 'local_shipping',
        hasSubMenu: true,
        parentId: null,
        routerLink:null,
        href: null,
        target: null
      },
      //child Courier
      {
          id: 'cour-01',
        title: 'Courier Payment',
        icon: 'payment',
        hasSubMenu: false,
        parentId: 'cour-00',
        routerLink: 'courier/courier-payment',
        href: null,
        target: null
      },
      {
          id: 'cour-02',
        title: 'Courier Service',
        icon: 'local_shipping',
        hasSubMenu: false,
        parentId: 'cour-00',
        routerLink: 'courier/courier-service',
        href: null,
        target: null
      },

     
      
         //parent Items Service
     
         {
          id: 'itm-ser-00',
          title: 'Items Services',
          icon: 'list_alt',
          hasSubMenu: true,
          parentId: null,
          routerLink:null,
          href: null,
          target: null
        },
        //child Items Service
        
        {
            id: 'itm-ser-01',
          title: 'Import Items',
          icon: 'store',
          hasSubMenu: false,
          parentId: 'itm-ser-00',
          routerLink: 'items-services/import-items',
          href: null,
          target: null
        },
        {
            id: 'itm-ser-02',
          title: 'Item categories',
          icon: 'subject',
          hasSubMenu: false,
          parentId: 'itm-ser-00',
          routerLink: 'items-services/item-categories',
          href: null,
          target: null
        },
        {
          id: 'itm-ser-03',
        title: ' Item List',
        icon: 'view_list',
        hasSubMenu: false,
        parentId: 'itm-ser-00',
        routerLink: 'items-services/item-list',
        href: null,
        target: null
      },
      {
          id: 'itm-ser-04',
        title: 'Item Location',
        icon: 'location_on',
        hasSubMenu: false,
        parentId: 'itm-ser-00',
        routerLink: 'items-services/item-location',
        href: null,
        target: null
      },
      {
        id: 'itm-ser-05',
      title: ' Mesurement Units',
      icon: 'straighten',
      hasSubMenu: false,
      parentId: 'itm-ser-00',
      routerLink: 'items-services/measurement-units',
      href: null,
      target: null
    },
    {
        id: 'itm-ser-06',
      title: 'Print Barcode',
      icon: 'print',
      hasSubMenu: false,
      parentId: 'itm-ser-00',
      routerLink: 'items-services/print-barcode',
      href: null,
      target: null
    },
    {
      id: 'itm-ser-07',
    title: ' Service List',
    icon: 'category',
    hasSubMenu: false,
    parentId: 'itm-ser-00',
    routerLink: 'items-services/service-list',
    href: null,
    target: null
  },
  {
      id: 'itm-ser-08',
    title: 'Taxes',
    icon: 'attach_money',
    hasSubMenu: false,
    parentId: 'itm-ser-00',
    routerLink: 'items-services/taxes',
    href: null,
    target: null
  },


  //parent payments
     
  {
    id: 'pmt-00',
    title: 'Payments',
    icon: 'money',
    hasSubMenu: true,
    parentId: null,
    routerLink:null,
    href: null,
    target: null
  },
  //child payments
  
  {
      id: 'pmt-01',
    title: 'provided (Supplier)',
    icon: 'arrow_forward',
    hasSubMenu: false,
    parentId: 'pmt-00',
    routerLink: 'payments/provided',
    href: null,
    target: null
  },
  {
    id: 'pmt-02',
  title: 'Received (Customer)  ',
  icon: 'arrow_forward',
  hasSubMenu: false,
  parentId: 'pmt-00',
  routerLink: 'payments/receive',
  href: null,
  target: null
},

//parent payments
     
{
  id: 'prc-00',
  title: 'Purchase',
  icon: 'credit_card',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child payments

{
    id: 'prc-01',
  title: 'Make Purchase',
  icon: 'credit_card',
  hasSubMenu: false,
  parentId: 'prc-00',
  routerLink: 'purchase/make-purchase',
  href: null,
  target: null
},
{
  id: 'prc-02',
title: 'Make Purchae Order',
icon: 'add_shopping_cart',
hasSubMenu: false,
parentId: 'prc-00',
routerLink: 'purchase/make-purchase-order',
href: null,
target: null
},
{
  id: 'prc-03',
title: 'Purchase',
icon: 'credit_card',
hasSubMenu: false,
parentId: 'prc-00',
routerLink: 'purchase/purchase',
href: null,
target: null
},
{
id: 'prc-04',
title: 'Purchae Order',
icon: 'credit_card',
hasSubMenu: false,
parentId: 'prc-00',
routerLink: 'purchase/purchase-order',
href: null,
target: null
},
{
  id: 'prc-05',
title: 'Purchase Return',
icon: 'assignment_return',
hasSubMenu: false,
parentId: 'prc-00',
routerLink: 'purchase/purchase-return',
href: null,
target: null
},
{
id: 'prc-06',
title: 'Suppliers',
icon: 'group',
hasSubMenu: false,
parentId: 'prc-00',
routerLink: 'purchase/suppliers',
href: null,
target: null
},
//parent sales
     
{
  id: 'sls-00',
  title: 'Sales',
  icon: 'monetization_on',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child sales

{
    id: 'sls-01',
  title: 'Customers',
  icon: 'account_box',
  hasSubMenu: false,
  parentId: 'sls-00',
  routerLink: 'sales/customers',
  href: null,
  target: null
},
{
  id: 'sls-02',
title: 'Exchange sold items',
icon: 'compare_arrows',
hasSubMenu: false,
parentId: 'sls-00',
routerLink: 'sales/exchange-sold-item',
href: null,
target: null
},
{
  id: 'sls-03',
title: 'Make Order',
icon: 'local_grocery_store',
hasSubMenu: false,
parentId: 'sls-00',
routerLink: 'sales/make-order',
href: null,
target: null
},
{
id: 'sls-04',
title: 'Make Quotation',
icon: 'notes',
hasSubMenu: false,
parentId: 'sls-00',
routerLink: 'sales/make-quotation',
href: null,
target: null
},
{
  id: 'sls-05',
title: 'Make Sale',
icon: 'show_chart',
hasSubMenu: false,
parentId: 'sls-00',
routerLink: 'sales/make-sale',
href: null,
target: null
},
{
id: 'sls-06',
title: 'Order',
icon: 'format_indent_increase',
hasSubMenu: false,
parentId: 'sls-00',
routerLink: 'sales/order',
href: null,
target: null
},
{
  id: 'sls-07',
  title: 'Quotation',
  icon: 'notes',
  hasSubMenu: false,
  parentId: 'sls-00',
  routerLink: 'sales/quotation',
  href: null,
  target: null
  },
  {
    id: 'sls-08',
  title: 'Return Sold Item',
  icon: 'assignment_return',
  hasSubMenu: false,
  parentId: 'sls-00',
  routerLink: 'sales/return-sold-item',
  href: null,
  target: null
  },
  {
  id: 'sls-09',
  title: 'Sale',
  icon: 'show_chart',
  hasSubMenu: false,
  parentId: 'sls-00',
  routerLink: 'sales/sale',
  href: null,
  target: null
  },

  //parent stocks
     
{
  id: 'stk-00',
  title: 'Stocks',
  icon: 'multiline_chart',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child payments

{
    id: 'stk-01',
  title: 'Production',
  icon: 'store_mall_directory',
  hasSubMenu: false,
  parentId: 'stk-00',
  routerLink: 'stocks/production',
  href: null,
  target: null
},
{
  id: 'stk-02',
title: 'Make Purchae Order',
icon: 'store_mall_directory',
hasSubMenu: false,
parentId: 'stk-00',
routerLink: 'stocks/stock-adjustment',
href: null,
target: null
},
{
  id: 'stk-03',
title: 'Purchase',
icon: 'payment',
hasSubMenu: false,
parentId: 'stk-00',
routerLink: 'stocks/stock-list',
href: null,
target: null
},
{
id: 'stk-04',
title: 'Purchae Order',
icon: 'payment',
hasSubMenu: false,
parentId: 'stk-00',
routerLink: 'stocks/stock-transfer',
href: null,
target: null
},
{
  id: 'stk-05',
title: 'Purchase Return',
icon: 'assignment_returned',
hasSubMenu: false,
parentId: 'stk-00',
routerLink: 'stocks/warehouse',
href: null,
target: null
},

//parent tools
     
{
  id: 'tol-00',
  title: 'Tools',
  icon: 'build',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child tools

{
    id: 'tol-01',
  title: 'Activity Logs',
  icon: 'local_activity',
  hasSubMenu: false,
  parentId: 'tol-00',
  routerLink: 'tools/activity-logs',
  href: null,
  target: null
},
{
  id: 'tol-02',
title: 'Audit Log',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/audit-log',
href: null,
target: null
},
{
  id: 'tol-03',
title: 'Bkash Agreements',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/bkash-agreements',
href: null,
target: null
},
{
id: 'tol-04',
title: 'Bkash Payments',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/bkash-payments',
href: null,
target: null
},
{
  id: 'tol-05',
title: 'My Companies',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/my-companies',
href: null,
target: null
},
{
id: 'tol-06',
title: 'Organization Info',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/organization-info',
href: null,
target: null
},
{
  id: 'tol-07',
title: 'Printers',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/printers',
href: null,
target: null
},
{
id: 'tol-08',
title: 'Roles',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/roles',
href: null,
target: null
},
{
id: 'tol-09',
title: 'Settings',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/settings',
href: null,
target: null
},
{
id: 'tol-10',
title: 'SMS History',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/sms-history',
href: null,
target: null
},
{
id: 'tol-11',
title: 'Subscription-invoice',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/subscription-invoice',
href: null,
target: null
},
{
id: 'tol-12',
title: 'Users',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'tol-00',
routerLink: 'tools/users',
href: null,
target: null
},

//parent traders
     
{
  id: 'trd-00',
  title: 'Traders',
  icon: 'label_important',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child tools

{
    id: 'trd-01',
  title: 'Customers',
  icon: 'dashboard_customize',
  hasSubMenu: false,
  parentId: 'trd-00',
  routerLink: 'traders/customers',
  href: null,
  target: null
},
{
  id: 'trd-02',
title: 'Import Traders',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trd-00',
routerLink: 'traders/import-traders',
href: null,
target: null
},
{
  id: 'trd-03',
title: 'Suppliers',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trd-00',
routerLink: 'traders/suppliers',
href: null,
target: null
},

//parent Transactions
     
{
  id: 'trnx-00',
  title: 'Transactions',
  icon: 'compare_arrows',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},
//child transactions

{
    id: 'trnx-01',
  title: 'clearing cheque',
  icon: 'dashboard_customize',
  hasSubMenu: false,
  parentId: 'trnx-00',
  routerLink: 'transactions/clearing-cheque',
  href: null,
  target: null
},
{
  id: 'trnx-02',
title: 'Income',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trnx-00',
routerLink: 'transactions/income',
href: null,
target: null
},
{
  id: 'trnx-03',
title: 'Pay expense',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trnx-00',
routerLink: 'transactions/pay-expenses',
href: null,
target: null
},
{
  id: 'trnx-04',
title: 'Vouchers',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trnx-00',
routerLink: 'transactions/vouchers',
href: null,
target: null
},
{
  id: 'trnx-05',
title: 'Withdraw',
icon: 'dashboard_customize',
hasSubMenu: false,
parentId: 'trnx-00',
routerLink: 'transactions/withdraw',
href: null,
target: null
},

//parent Limit
{
  id: 'lmt-00',
  title: 'Limit',
  icon: 'pan_tool',
  hasSubMenu: false,
  parentId: null,
  routerLink:'limit',
  href: null,
  target: null
},

//parent reports
{
  id: 'rpt-00',
  title: 'Report',
  icon: 'receipt',
  hasSubMenu: true,
  parentId: null,
  routerLink:null,
  href: null,
  target: null
},

//child reports
{
  id: 'rpt-01',
title: 'Aged Account Pyable',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/aged-account-payable',
href: null,
target: null
},
{
  id: 'rpt-02',
title: 'Aged Account Receivable',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/aged-account-receivable',
href: null,
target: null
},{
  id: 'rpt-03',
title: 'Balance Sheet',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/balance-sheet',
href: null,
target: null
},{
  id: 'rpt-04',
title: 'Balance Sheet All',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/balance-sheet-all',
href: null,
target: null
},{
  id: 'rpt-05',
title: 'Casier Wise Summary Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/casier-wise-summary-report',
href: null,
target: null
},{
  id: 'rpt-06',
title: 'Courier Statement',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/courier-statement',
href: null,
target: null
},{
  id: 'rpt-07',
title: 'Customer Collection',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/customer-collection',
href: null,
target: null
},{
  id: 'rpt-08',
title: 'Customer Ledger',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/customer-ledger',
href: null,
target: null
},{
  id: 'rpt-09',
title: 'Customer Statement',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/customer-statement',
href: null,
target: null
},{
  id: 'rpt-10',
title: 'Customer Wise Item Profit Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/customer-wise-item-profit-report',
href: null,
target: null
},{
  id: 'rpt-11',
title: 'Day Closing',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/day-closing',
href: null,
target: null
},{
  id: 'rpt-12',
title: 'Expense Detail Report ',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/expense-detail-report',
href: null,
target: null
},{
  id: 'rpt-13',
title: 'Expense Summary Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/expense-summary-report',
href: null,
target: null
},
{
  id: 'rpt-15',
title: 'Item Wise Sales Report2',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/item-wise-sales-report',
href: null,
target: null
},{
  id: 'rpt-14',
title: 'Item Sale Summary2',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/item-sale-summary',
href: null,
target: null
},{
  id: 'rpt-16',
title: 'Month To Date Sales',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/month-to-date-sales',
href: null,
target: null
},{
  id: 'rpt-17',
title: 'Profit Loss Statement',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/profit-loss-statement',
href: null,
target: null
},{
  id: 'rpt-18',
title: 'Purchase Register',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/purchase-register',
href: null,
target: null
},{
  id: 'rpt-19',
title: 'Representative Wise Sales Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/representative-wise-sales-report',
href: null,
target: null
},{
  id: 'rpt-20',
title: 'Sales Register',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/sales-register',
href: null,
target: null
},{
  id: 'rpt-21',
title: 'Stock Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/stock-report',
href: null,
target: null
},{
  id: 'rpt-22',
title: 'Stock Report All',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/stock-report-all',
href: null,
target: null
},{
  id: 'rpt-23',
title: 'Stock Transaction Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/stock-transaction-report',
href: null,
target: null
},{
  id: 'rpt-24',
title: 'Stock Transfer Report',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/Stock Transfer Report',
href: null,
target: null
},{
  id: 'rpt-25',
title: 'Supplier Ledger ',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/supplier-ledger',
href: null,
target: null
},{
  id: 'rpt-26',
title: 'Supplier Statement',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/supplier-statement',
href: null,
target: null
},
{
  id: 'rpt-27',
title: 'Tax Computation',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/tax-computation',
href: null,
target: null
},{
  id: 'rpt-28',
title: 'Today\'s Transaction Report ',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/todays-transaction-report',
href: null,
target: null
},
{
  id: 'rpt-29',
title: 'Upcoming Installments',
icon: 'tune',
hasSubMenu: false,
parentId: 'rpt-00',
routerLink: 'reports/upcoming-installments',
href: null,
target: null
},

];
  