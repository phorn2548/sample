//
function infinite_mean() {
    var z = 0;
    var n = 0;
    var sd = 0;
    var d = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z = "+z;
    sd = document.getElementById("sd").value;
    d = document.getElementById('d').value;
    n = (z * z) * (sd * sd) / (d * d);
    n = Math.ceil(n)
    document.getElementById("output").innerText="n = "+n+" samples";
}

function finite_mean() {
    var z = 0; 
    var z2 = 0;
    var sd = 0;
    var sd2 = 0;
    var n = 0;
    var d = 0;
    var d2 = 0;
    var pop = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z = "+z;
    sd = document.getElementById("sd").value;
    d = document.getElementById('d').value;
    pop = document.getElementById('pop').value;
    z2 = z * z; 
    d2 = d * d;
    sd2 = sd * sd;
    n = pop * sd2 * z2/((d2*(pop-1))+(sd2*z2));
    n = Math.ceil(n)
    document.getElementById("output").innerText="n = "+n+" samples";
}
function infinite_prop() {
    var z = 0;
    var z2 = 0;
    var n = 0;
    var p = 0;
    var d = 0;
    var d2 = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z = "+z;
    p = document.getElementById("p").value;
    d = document.getElementById('d').value;
    z2 = z * z;
    d2 = d * d;
    n = (z2 * p * (1-p))/d2
    n = Math.ceil(n)
    document.getElementById("output").innerText="n = "+n+" samples";
}

function finite_prop() {
    var z = 0; 
    var z2 = 0;
    var p = 0;
    var p2 = 0;
    var n = 0;
    var d = 0;
    var d2 = 0;
    var pop = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z = "+z;
    p = document.getElementById("p").value;
    d = document.getElementById('d').value;
    pop = document.getElementById('pop').value;
    z2 = z * z; 
    d2 = d * d;
    p2 = p * (1-p);
    n = (pop * p2 * z2)/((d2 * (pop - 1))+(p2 * z2));
    n = Math.ceil(n);
    document.getElementById("output").innerText="n = "+n+" samples";

}
function one_population_mean() {
    var mu = 0;
    var mu0 = 0;
    var mux = 0;
    var sd = 0;
    var z = 0;
    var b = 0;
    var sd2 = 0;
    var zb2 =0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    mu = document.getElementById('mu').value;
    mu0 = document.getElementById('mu0').value;
    sd = document.getElementById('sd').value;
    sd2 = sd * sd;
    zb2 = (z + b) * (z + b);
    mux = (mu - mu0) * (mu - mu0);
    n = (zb2 * sd2)/mux;
    n = Math.ceil(n);
    document.getElementById("output").innerText="n = "+n+" samples";
}
function one_population_proportion() {
    var p = 0;
    var p0 = 0;
    var px = 0;
    var p2 = 0;
    var z = 0;
    var b = 0;
    var zb2 =0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    p = document.getElementById('p').value;
    p0 = document.getElementById('p0').value;
    zb2 = (z + b) * (z + b);
    px = (p - p0) * (p - p0);
    p2 = p * (1 - p);
    n = (zb2 * p2)/px;
    n = Math.ceil(n);
    document.getElementById("output").innerText="n = "+n+" samples";
}
function two_independent_mean() {
    var mu1 = 0;
    var mu2 = 0;
    var mux = 0;
    var sd1 = 0;
    var sd2 = 0;
    var sdx = 0;
    var z = 0;
    var b = 0;
    var zb2 =0;
    var r = 1;
    var n = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    mu1 = document.getElementById('mu1').value;
    mu2 = document.getElementById('mu2').value;
    sd1 = document.getElementById('sd1').value;
    sd2 = document.getElementById('sd2').value;
    r = document.getElementById('r').value;
    zb2 = (z + b) * (z + b);
    mux = (mu1 - mu2) * (mu1 - mu2);
    sdx = (sd1 * sd1) + ((sd2 * sd2)/r)
    n = (zb2 * sdx)/mux;
    n = Math.ceil(n);
    document.getElementById("output").innerText="Group1 = "+n+" samples Group2 = "+n * r+" samples";
}
function two_dependent_mean() {
    var sd = 0;
    var d = 0;
    var z = 0;
    var b = 0;
    var zb2 =0;
    var n = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    sd = document.getElementById('sd').value;
    d = document.getElementById('d').value;
    zb2 = (z + b) * (z + b);
    n = (zb2 * (sd *sd))/(d *d)
    n = Math.ceil(n);
    document.getElementById("output").innerText="n = "+n+" samples";
}
function two_independent_proportion() {
    let p1 = 0;
    let p2 = 0;
    var r = 0;
    var z = 0;
    var b = 0; 
    let p_bar = 0; 
    let q_bar = 0; 
    var q1 = 0;
    var q2 = 0; 
    var d = 0; 
    var t1 = 0;
    var t2 = 0;
    var t3 = 0;
    var n = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    p1 = document.getElementById('p1').value;
    p2 = document.getElementById('p2').value;
    r = document.getElementById('r').value;
    p1 = parseFloat(p1);
    p2 = parseFloat(p2);
    r = parseFloat(r);
    q1 = 1 - p1;
    q2 = 1 - p2;
    d = Math.sqrt((p1 - p2) * (p1 - p2));
    p_bar = (p1 + (p2 * r)) / (1 + r);
    q_bar = 1 - p_bar;
    t1 = z * Math.sqrt(p_bar * q_bar * (1 + (1 / r)));
    t2 = b * Math.sqrt((p1 * q1) + ((p2 * q2) / r));
    n = ((t1 + t2)/d) * ((t1 + t2)/d);
    n = Math.ceil(n);
    document.getElementById("output").innerText="Group1 = "+n+" samples Group2 = "+n * r+" samples";
}
function two_dependent_proportion() {
    var p10 = 0;
    var p01 = 0;
    var d = 0;
    var z = 0;
    var b = 0;
    var t1 = 0;
    var t2 = 0;
    var n = 0;
    var pp = 0;
    var pn = 0;
    if(document.getElementById('alpha1').checked ==true){z=1.96;}
    if(document.getElementById('alpha2').checked ==true){z=2.57;}
    document.getElementById("get_z").innerText= "Z Alpha= "+z;
    if(document.getElementById('beta1').checked ==true){b=0.84;}
    if(document.getElementById('beta2').checked ==true){b=0.92;}
    document.getElementById("get_b").innerText= "Z Bata ="+b;
    p10 = document.getElementById('p10').value;
    p01 = document.getElementById('p01').value;
    p10 = parseFloat(p10);
    p01 = parseFloat(p01);
    //pp = p01 + p10;
    //pn = p01 - p10;
    d = Math.sqrt((p10 - p01) * (p10 - p01));
    t1 = z * Math.sqrt(p01 + p10);
    t2 = b * Math.sqrt((p01 + p10) - ((p01 - p10) * (p01 - p10)));
    n = ((t1 + t2) / d) * ((t1 + t2) / d);
    n = Math.ceil(n);
    document.getElementById("output").innerText="n = "+ n +" samples";
}