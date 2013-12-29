var customerDb = {}; // Remember this is not ARRAY...
var id_inc = 0;

exports.listCustomers = function () {
    return customerDb;
};

exports.addCustomer = function (customer) {
    id_inc = id_inc + 1;
    customer.id = id_inc;
    customerDb[customer.id] = customer;
};


exports.getCustomerById = function (id) {
    return customerDb[id];
};

exports.deleteCustomer = function (id) {
    delete(customerDb[id]);
};

exports.updateCustomer = function (customer) {
    customerDb[customer.id] = customer;
};

