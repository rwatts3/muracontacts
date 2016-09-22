this["muracontacts"] = this["muracontacts"] || {};
this["muracontacts"]["templates"] = this["muracontacts"]["templates"] || {};

window.mura.Handlebars.registerPartial("contactlistitem", window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr>\n\n  <!-- Contact Name -->\n  <td>\n    <a class=\"btn\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.fullname : stack1), depth0))
    + "\n    </a>\n  </td>\n\n  <td class=\"right\">\n    <!-- Edit -->\n    <a class=\"btn btn-success\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <i class=\"fa fa-pencil\"></i>\n    </a>\n\n    <!-- Delete -->\n    <form method=\"post\" class=\"muracontacts-form muracontacts-formlink\">\n      <input type=\"hidden\" name=\"mcaction\" value=\"delete\">\n      <input type=\"hidden\" name=\"pid\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <button type=\"submit\" class=\"btn btn-danger btn-delete btn-delete-contact\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </form>\n  </td>\n\n</tr>\n";
},"useData":true}));

window.mura.Handlebars.registerPartial("phonelistitem", window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"muracontacts-phonenumber\">\n  <!-- Edit -->\n  <a class=\"btn btn-sm btn-primary\" href=\"./#mcaction=editphone&amp;pid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "&amp;phoneid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.phonenumberid : stack1), depth0))
    + "\">\n    <i class=\"fa fa-pencil\"></i>\n  </a>\n\n  <!-- Phone Number -->\n  <a class=\"btn\" href=\"tel:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.phonenumber : stack1), depth0))
    + "\">\n    "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.phonenumber : stack1), depth0))
    + "\n    <strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.phonetype : stack1), depth0))
    + "</strong>\n  </a>\n</li>\n";
},"useData":true}));

this["muracontacts"]["templates"]["body"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"muracontacts-heading\">\n      <h2>"
    + container.escapeExpression(((helper = (helper = helpers.userfirstname || (depth0 != null ? depth0.userfirstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userfirstname","hash":{},"data":data}) : helper)))
    + "'s Contacts</h2>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "    <div class=\"muracontacts-alert alert alert-"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.type : stack1), depth0))
    + " alert-dismissible\" role=\"alert\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <p>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"muracontacts-body\">\n      "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"muracontacts-wrapper\">\n\n  <!-- Heading -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.userfirstname : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Messaging -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasmessage : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Body -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n<!-- @end muracontacts-wrapper -->\n";
},"useData":true});

this["muracontacts"]["templates"]["contactlisttable"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.contactlistitem,depth0,{"name":"contactlistitem","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "      <tr>\n        <td colspan=\"2\" class=\"info\">\n          <i class=\"fa fa-info-circle\"></i> No contacts exist yet.\n        </td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"table-responsive\">\n  <table class=\"table-condensed table-hover\">\n\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>&nbsp;</th>\n      </tr>\n    </thead>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.people : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    <tfoot>\n      <tr>\n        <td colspan=\"2\" class=\"addrow\">\n          <a class=\"btn btn-primary\" href=\"./#mcaction=edit&amp;pid=\">\n            <i class=\"fa fa-plus\"></i>\n          </a>\n        </td>\n    </tfoot>\n\n  </table>\n</div>\n";
},"usePartial":true,"useData":true});

this["muracontacts"]["templates"]["editcontact"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <form method=\"post\" class=\"muracontacts-form muracontacts-formlink\">\n      <input type=\"hidden\" name=\"mcaction\" value=\"delete\">\n      <input type=\"hidden\" name=\"pid\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <button type=\"submit\" class=\"btn btn-danger btn-delete btn-delete-contact\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <label>Phone Numbers</label>\n        <ul class=\"nav muracontacts-phonenumbers\">\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.phonenumbers : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        </ul>\n\n        <!--- Add Phone --->\n        <div class=\"pad\">\n          <a class=\"btn btn-success btn-sm muracontacts-addphone-button\" href=\"./#mcaction=editphone&amp;pid="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n            <i class=\"fa fa-plus\"></i> Phone\n          </a>\n        </div>\n      </div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.phonenumbers : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.phonelistitem,depth0,{"name":"phonelistitem","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"muracontacts-phonenumber\">\n              <i class=\"fa fa-info-circle\"></i> No phone numbers exist yet.\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"pad\">\n  <a class=\"btn btn-primary\" href=\"./#mcaction=list\">\n    <i class=\"fa fa-arrow-left\"></i>\n  </a>\n\n  <!-- Delete -->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.exists : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<h3>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.label : stack1), depth0))
    + " Contact</h3>\n\n<form method=\"post\" class=\"muracontacts-form pad\">\n  <div class=\"form-group\">\n    <label for=\"namefirst\">First Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"namefirst\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.namefirst : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"namelast\">Last Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"namelast\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.namelast : stack1), depth0))
    + "\">\n  </div>\n\n  <input type=\"hidden\" name=\"mcaction\" value=\"savecontact\">\n  <input type=\"hidden\" name=\"personid\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n\n  <button type=\"submit\" class=\"btn btn-primary\">\n    <i class=\"fa fa-floppy-o\"></i>\n  </button>\n  <a class=\"btn btn-default\" href=\"./#mcaction=list\"><i class=\"fa fa-ban\"></i></a>\n</form>\n\n<!-- Phone Number(s) -->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.exists : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- @End Phone Number(s) -->\n";
},"usePartial":true,"useData":true});

this["muracontacts"]["templates"]["editphone"] = window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h3>Edit Phone</h3>\n";
},"useData":true});

this["muracontacts"]["templates"]["loggedout"] = window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"muracontacts-heading\">\n  <h2>MuraContacts</h2>\n</div>\n<p class=\"alert alert-danger\">You must be <a href=\"./?display=login\">logged in</a> to use <strong>MuraContacts</strong></p>\n";
},"useData":true});