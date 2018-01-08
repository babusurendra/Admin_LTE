webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Dashboard\r\n      <small>Control panel</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Dashboard</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <!-- Small boxes (Stat box) -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-aqua\">\r\n          <div class=\"inner\">\r\n            <h3>150</h3>\r\n\r\n            <p>New Orders</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-bag\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-green\">\r\n          <div class=\"inner\">\r\n            <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\r\n\r\n            <p>Bounce Rate</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-stats-bars\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-yellow\">\r\n          <div class=\"inner\">\r\n            <h3>44</h3>\r\n\r\n            <p>User Registrations</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-person-add\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-red\">\r\n          <div class=\"inner\">\r\n            <h3>65</h3>\r\n\r\n            <p>Unique Visitors</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-pie-graph\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <!-- Main row -->\r\n    <div class=\"row\">\r\n      <!-- Left col -->\r\n      <section class=\"col-lg-7 connectedSortable\">\r\n        <!-- Custom tabs (Charts with tabs)-->\r\n        <div class=\"nav-tabs-custom\">\r\n          <!-- Tabs within a box -->\r\n          <ul class=\"nav nav-tabs pull-right\">\r\n            <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\r\n            <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\r\n            <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\r\n          </ul>\r\n          <div class=\"tab-content no-padding\">\r\n            <!-- Morris chart - Sales -->\r\n            <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\r\n            <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- /.nav-tabs-custom -->\r\n\r\n        <!-- Chat box -->\r\n        <div class=\"box box-success\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-comments-o\"></i>\r\n\r\n            <h3 class=\"box-title\">Chat</h3>\r\n\r\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\r\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\r\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\r\n                  </button>\r\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body chat\" id=\"chat-box\">\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\r\n                    Mike Doe\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n              <div class=\"attachment\">\r\n                <h4>Attachments:</h4>\r\n\r\n                <p class=\"filename\">\r\n                  Theme-thumbnail-image.jpg\r\n                </p>\r\n\r\n                <div class=\"pull-right\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\r\n                </div>\r\n              </div>\r\n              <!-- /.attachment -->\r\n            </div>\r\n            <!-- /.item -->\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\r\n                    Alexander Pierce\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n            </div>\r\n            <!-- /.item -->\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\r\n                    Susan Doe\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n            </div>\r\n            <!-- /.item -->\r\n          </div>\r\n          <!-- /.chat -->\r\n          <div class=\"box-footer\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"Type message...\">\r\n\r\n              <div class=\"input-group-btn\">\r\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box (chat box) -->\r\n\r\n        <!-- TO DO List -->\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\">\r\n            <i class=\"ion ion-clipboard\"></i>\r\n\r\n            <h3 class=\"box-title\">To Do List</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <ul class=\"pagination pagination-sm inline\">\r\n                <li><a href=\"#\">&laquo;</a></li>\r\n                <li><a href=\"#\">1</a></li>\r\n                <li><a href=\"#\">2</a></li>\r\n                <li><a href=\"#\">3</a></li>\r\n                <li><a href=\"#\">&raquo;</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <ul class=\"todo-list\">\r\n              <li>\r\n                <!-- drag handle -->\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <!-- checkbox -->\r\n                <input type=\"checkbox\" value=\"\">\r\n                <!-- todo text -->\r\n                <span class=\"text\">Design a nice theme</span>\r\n                <!-- Emphasis label -->\r\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\r\n                <!-- General tools such as edit or delete-->\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Make the theme responsive</span>\r\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Check your messages and notifications</span>\r\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer clearfix no-border\">\r\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- quick email widget -->\r\n        <div class=\"box box-info\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n\r\n            <h3 class=\"box-title\">Quick Email</h3>\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\r\n                  <i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n            <!-- /. tools -->\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <form action=\"#\" method=\"post\">\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\r\n              </div>\r\n              <div>\r\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"box-footer clearfix\">\r\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\r\n                <i class=\"fa fa-arrow-circle-right\"></i></button>\r\n          </div>\r\n        </div>\r\n\r\n      </section>\r\n      <!-- /.Left col -->\r\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\r\n      <section class=\"col-lg-5 connectedSortable\">\r\n\r\n        <!-- Map box -->\r\n        <div class=\"box box-solid bg-light-blue-gradient\">\r\n          <div class=\"box-header\">\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\r\n                  <i class=\"fa fa-calendar\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\"\r\n                style=\"margin-right: 5px;\">\r\n                  <i class=\"fa fa-minus\"></i></button>\r\n            </div>\r\n            <!-- /. tools -->\r\n\r\n            <i class=\"fa fa-map-marker\"></i>\r\n\r\n            <h3 class=\"box-title\">\r\n              Visitors\r\n            </h3>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\r\n          </div>\r\n          <!-- /.box-body-->\r\n          <div class=\"box-footer no-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <div id=\"sparkline-1\"></div>\r\n                <div class=\"knob-label\">Visitors</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <div id=\"sparkline-2\"></div>\r\n                <div class=\"knob-label\">Online</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\">\r\n                <div id=\"sparkline-3\"></div>\r\n                <div class=\"knob-label\">Exists</div>\r\n              </div>\r\n              <!-- ./col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- solid sales graph -->\r\n        <div class=\"box box-solid bg-teal-gradient\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-th\"></i>\r\n\r\n            <h3 class=\"box-title\">Sales Graph</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body border-radius-none\">\r\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer no-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">Mail-Orders</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">Online</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">In-Store</div>\r\n              </div>\r\n              <!-- ./col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- Calendar -->\r\n        <div class=\"box box-solid bg-green-gradient\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n\r\n            <h3 class=\"box-title\">Calendar</h3>\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <!-- button with a dropdown -->\r\n              <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"fa fa-bars\"></i></button>\r\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                  <li><a href=\"#\">Add new event</a></li>\r\n                  <li><a href=\"#\">Clear events</a></li>\r\n                  <li class=\"divider\"></li>\r\n                  <li><a href=\"#\">View calendar</a></li>\r\n                </ul>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n            <!-- /. tools -->\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body no-padding\">\r\n            <!--The calendar -->\r\n            <div id=\"calendar\" style=\"width: 100%\"></div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer text-black\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- Progress bars -->\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #1</span>\r\n                  <small class=\"pull-right\">90%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                </div>\r\n\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #2</span>\r\n                  <small class=\"pull-right\">70%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #3</span>\r\n                  <small class=\"pull-right\">60%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\r\n                </div>\r\n\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #4</span>\r\n                  <small class=\"pull-right\">40%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n      </section>\r\n      <!-- right col -->\r\n    </div>\r\n    <!-- /.row (main row) -->\r\n\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminContentComponent = (function () {
    function AdminContentComponent() {
    }
    AdminContentComponent.prototype.ngOnInit = function () {
    };
    AdminContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-content',
            template: __webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminContentComponent);
    return AdminContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\r\n  <!-- Create the tabs -->\r\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n    <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <!-- Home tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n                <p>New phone +1(800)555-1234</p>\r\n              </div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n                <p>nora@example.com</p>\r\n              </div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n                <p>Execution time 5 seconds</p>\r\n              </div>\r\n            </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Custom Template Design\r\n              <span class=\"label label-danger pull-right\">70%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Update Resume\r\n              <span class=\"label label-success pull-right\">95%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Laravel Integration\r\n              <span class=\"label label-warning pull-right\">50%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Back End Framework\r\n              <span class=\"label label-primary pull-right\">68%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Stats tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Settings tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n      <form method=\"post\">\r\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n          <p>\r\n            Some information about this general settings option\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Allow mail redirect\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n          <p>\r\n            Other sets of options are available\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Expose author name in posts\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n          <p>\r\n            Allow the user to show his name in blog posts\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n\r\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Show me as online\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n        </div>\r\n        <!-- /.form-group -->\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Turn off notifications\r\n              <input type=\"checkbox\" class=\"pull-right\">\r\n            </label>\r\n        </div>\r\n        <!-- /.form-group -->\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Delete chat history\r\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\r\n            </label>\r\n        </div>\r\n        <!-- /.form-group -->\r\n      </form>\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n  </div>\r\n</aside>\r\n<!-- Add the sidebar's background. This div must be placed\r\n       immediately after the control sidebar -->\r\n<div class=\"control-sidebar-bg\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminControlSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminControlSidebarComponent = (function () {
    function AdminControlSidebarComponent() {
    }
    AdminControlSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminControlSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-control-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminControlSidebarComponent);
    return AdminControlSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Dashboard\r\n      <small>Control panel</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Dashboard</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <!-- Small boxes (Stat box) -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-aqua\">\r\n          <div class=\"inner\">\r\n            <h3>150</h3>\r\n\r\n            <p>New Orders</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-bag\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-green\">\r\n          <div class=\"inner\">\r\n            <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\r\n\r\n            <p>Bounce Rate</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-stats-bars\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-yellow\">\r\n          <div class=\"inner\">\r\n            <h3>44</h3>\r\n\r\n            <p>User Registrations</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-person-add\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-red\">\r\n          <div class=\"inner\">\r\n            <h3>65</h3>\r\n\r\n            <p>Unique Visitors</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-pie-graph\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <!-- Main row -->\r\n    <div class=\"row\">\r\n      <!-- Left col -->\r\n      <section class=\"col-lg-7 connectedSortable\">\r\n        <!-- Custom tabs (Charts with tabs)-->\r\n        <div class=\"nav-tabs-custom\">\r\n          <!-- Tabs within a box -->\r\n          <ul class=\"nav nav-tabs pull-right\">\r\n            <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\r\n            <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\r\n            <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\r\n          </ul>\r\n          <div class=\"tab-content no-padding\">\r\n            <!-- Morris chart - Sales -->\r\n            <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\r\n            <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- /.nav-tabs-custom -->\r\n\r\n        <!-- Chat box -->\r\n        <div class=\"box box-success\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-comments-o\"></i>\r\n\r\n            <h3 class=\"box-title\">Chat</h3>\r\n\r\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\r\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\r\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\r\n                  </button>\r\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body chat\" id=\"chat-box\">\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\r\n                    Mike Doe\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n              <div class=\"attachment\">\r\n                <h4>Attachments:</h4>\r\n\r\n                <p class=\"filename\">\r\n                  Theme-thumbnail-image.jpg\r\n                </p>\r\n\r\n                <div class=\"pull-right\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\r\n                </div>\r\n              </div>\r\n              <!-- /.attachment -->\r\n            </div>\r\n            <!-- /.item -->\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\r\n                    Alexander Pierce\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n            </div>\r\n            <!-- /.item -->\r\n            <!-- chat item -->\r\n            <div class=\"item\">\r\n              <img src=\"assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n              <p class=\"message\">\r\n                <a href=\"#\" class=\"name\">\r\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\r\n                    Susan Doe\r\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\r\n                They say it is going to be one the best themes on the market\r\n              </p>\r\n            </div>\r\n            <!-- /.item -->\r\n          </div>\r\n          <!-- /.chat -->\r\n          <div class=\"box-footer\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"Type message...\">\r\n\r\n              <div class=\"input-group-btn\">\r\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box (chat box) -->\r\n\r\n        <!-- TO DO List -->\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\">\r\n            <i class=\"ion ion-clipboard\"></i>\r\n\r\n            <h3 class=\"box-title\">To Do List</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <ul class=\"pagination pagination-sm inline\">\r\n                <li><a href=\"#\">&laquo;</a></li>\r\n                <li><a href=\"#\">1</a></li>\r\n                <li><a href=\"#\">2</a></li>\r\n                <li><a href=\"#\">3</a></li>\r\n                <li><a href=\"#\">&raquo;</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <ul class=\"todo-list\">\r\n              <li>\r\n                <!-- drag handle -->\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <!-- checkbox -->\r\n                <input type=\"checkbox\" value=\"\">\r\n                <!-- todo text -->\r\n                <span class=\"text\">Design a nice theme</span>\r\n                <!-- Emphasis label -->\r\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\r\n                <!-- General tools such as edit or delete-->\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Make the theme responsive</span>\r\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Check your messages and notifications</span>\r\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <span class=\"handle\">\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                        <i class=\"fa fa-ellipsis-v\"></i>\r\n                      </span>\r\n                <input type=\"checkbox\" value=\"\">\r\n                <span class=\"text\">Let theme shine like a star</span>\r\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\r\n                <div class=\"tools\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer clearfix no-border\">\r\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- quick email widget -->\r\n        <div class=\"box box-info\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n\r\n            <h3 class=\"box-title\">Quick Email</h3>\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\r\n                  <i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n            <!-- /. tools -->\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <form action=\"#\" method=\"post\">\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\r\n              </div>\r\n              <div>\r\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"box-footer clearfix\">\r\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\r\n                <i class=\"fa fa-arrow-circle-right\"></i></button>\r\n          </div>\r\n        </div>\r\n\r\n      </section>\r\n      <!-- /.Left col -->\r\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\r\n      <section class=\"col-lg-5 connectedSortable\">\r\n\r\n        <!-- Map box -->\r\n        <div class=\"box box-solid bg-light-blue-gradient\">\r\n          <div class=\"box-header\">\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\r\n                  <i class=\"fa fa-calendar\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\"\r\n                style=\"margin-right: 5px;\">\r\n                  <i class=\"fa fa-minus\"></i></button>\r\n            </div>\r\n            <!-- /. tools -->\r\n\r\n            <i class=\"fa fa-map-marker\"></i>\r\n\r\n            <h3 class=\"box-title\">\r\n              Visitors\r\n            </h3>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\r\n          </div>\r\n          <!-- /.box-body-->\r\n          <div class=\"box-footer no-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <div id=\"sparkline-1\"></div>\r\n                <div class=\"knob-label\">Visitors</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <div id=\"sparkline-2\"></div>\r\n                <div class=\"knob-label\">Online</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\">\r\n                <div id=\"sparkline-3\"></div>\r\n                <div class=\"knob-label\">Exists</div>\r\n              </div>\r\n              <!-- ./col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- solid sales graph -->\r\n        <div class=\"box box-solid bg-teal-gradient\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-th\"></i>\r\n\r\n            <h3 class=\"box-title\">Sales Graph</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body border-radius-none\">\r\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer no-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">Mail-Orders</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">Online</div>\r\n              </div>\r\n              <!-- ./col -->\r\n              <div class=\"col-xs-4 text-center\">\r\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                <div class=\"knob-label\">In-Store</div>\r\n              </div>\r\n              <!-- ./col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- Calendar -->\r\n        <div class=\"box box-solid bg-green-gradient\">\r\n          <div class=\"box-header\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n\r\n            <h3 class=\"box-title\">Calendar</h3>\r\n            <!-- tools box -->\r\n            <div class=\"pull-right box-tools\">\r\n              <!-- button with a dropdown -->\r\n              <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"fa fa-bars\"></i></button>\r\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                  <li><a href=\"#\">Add new event</a></li>\r\n                  <li><a href=\"#\">Clear events</a></li>\r\n                  <li class=\"divider\"></li>\r\n                  <li><a href=\"#\">View calendar</a></li>\r\n                </ul>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n            <!-- /. tools -->\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body no-padding\">\r\n            <!--The calendar -->\r\n            <div id=\"calendar\" style=\"width: 100%\"></div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer text-black\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- Progress bars -->\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #1</span>\r\n                  <small class=\"pull-right\">90%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                </div>\r\n\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #2</span>\r\n                  <small class=\"pull-right\">70%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #3</span>\r\n                  <small class=\"pull-right\">60%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\r\n                </div>\r\n\r\n                <div class=\"clearfix\">\r\n                  <span class=\"pull-left\">Task #4</span>\r\n                  <small class=\"pull-right\">40%</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n      </section>\r\n      <!-- right col -->\r\n    </div>\r\n    <!-- /.row (main row) -->\r\n\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboard1Component = (function () {
    function AdminDashboard1Component() {
    }
    AdminDashboard1Component.prototype.ngOnInit = function () {
        // Update the AdminLTE layouts
        AdminLTE.init();
        // Make the dashboard widgets sortable Using jquery UI
        jQuery('.connectedSortable').sortable({
            placeholder: 'sort-highlight',
            connectWith: '.connectedSortable',
            handle: '.box-header, .nav-tabs',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');
        // jQuery UI sortable for the todo list
        jQuery('.todo-list').sortable({
            placeholder: 'sort-highlight',
            handle: '.handle',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        // bootstrap WYSIHTML5 - text editor
        // jQuery('.textarea').wysihtml5();
        jQuery('.daterange').daterangepicker({
            ranges: {
                'Today': [__WEBPACK_IMPORTED_MODULE_1_moment__(), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'Yesterday': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days')],
                'Last 7 Days': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(6, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'Last 30 Days': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(29, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'This Month': [__WEBPACK_IMPORTED_MODULE_1_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().endOf('month')],
                'Last Month': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').endOf('month')]
            },
            startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(29, 'days'),
            endDate: __WEBPACK_IMPORTED_MODULE_1_moment__()
        }, function (start, end) {
            // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
        });
        this.knob = jQuery('.knob').knob();
        this.calendar = jQuery('#calendar').datepicker();
        // SLIMSCROLL FOR CHAT WIDGET
        jQuery('#chat-box').slimScroll({
            height: '250px'
        });
        this.areaChart = Morris.Area({
            element: 'revenue-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666, item2: 2666 },
                { y: '2011 Q2', item1: 2778, item2: 2294 },
                { y: '2011 Q3', item1: 4912, item2: 1969 },
                { y: '2011 Q4', item1: 3767, item2: 3597 },
                { y: '2012 Q1', item1: 6810, item2: 1914 },
                { y: '2012 Q2', item1: 5670, item2: 4293 },
                { y: '2012 Q3', item1: 4820, item2: 3795 },
                { y: '2012 Q4', item1: 15073, item2: 5967 },
                { y: '2013 Q1', item1: 10687, item2: 4460 },
                { y: '2013 Q2', item1: 8432, item2: 5713 }
            ],
            xkey: 'y',
            ykeys: ['item1', 'item2'],
            labels: ['Item 1', 'Item 2'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
        });
        this.donutChart = Morris.Donut({
            element: 'sales-chart',
            resize: true,
            colors: ['#3c8dbc', '#f56954', '#00a65a'],
            data: [
                { label: 'Download Sales', value: 12 },
                { label: 'In-Store Sales', value: 30 },
                { label: 'Mail-Order Sales', value: 20 }
            ],
        });
        this.linechart = Morris.Line({
            element: 'line-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666 },
                { y: '2011 Q2', item1: 2778 },
                { y: '2011 Q3', item1: 4912 },
                { y: '2011 Q4', item1: 3767 },
                { y: '2012 Q1', item1: 6810 },
                { y: '2012 Q2', item1: 5670 },
                { y: '2012 Q3', item1: 4820 },
                { y: '2012 Q4', item1: 15073 },
                { y: '2013 Q1', item1: 10687 },
                { y: '2013 Q2', item1: 8432 }
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['Item 1'],
            lineColors: ['#efefef'],
            lineWidth: 2,
            hideHover: 'auto',
            gridTextColor: '#fff',
            gridStrokeWidth: 0.4,
            pointSize: 4,
            pointStrokeColors: ['#efefef'],
            gridLineColor: '#efefef',
            gridTextFamily: 'Open Sans',
            gridTextSize: 10
        });
        /* The todo list plugin */
        /*
        jQuery('.todo-list').todolist({
          onCheck: function (ele) {
            window.console.log('The element has been checked');
            return ele;
          },
          onUncheck: function (ele) {
            window.console.log('The element has been unchecked');
            return ele;
          }
        });*/
    };
    AdminDashboard1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard1',
            template: __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboard1Component);
    return AdminDashboard1Component;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Dashboard\r\n      <small>Version 2.0</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Dashboard</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <!-- Info boxes -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">CPU Traffic</span>\r\n            <span class=\"info-box-number\">90<small>%</small></span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Likes</span>\r\n            <span class=\"info-box-number\">41,410</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n\r\n      <!-- fix for small devices only -->\r\n      <div class=\"clearfix visible-sm-block\"></div>\r\n\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Sales</span>\r\n            <span class=\"info-box-number\">760</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">New Members</span>\r\n            <span class=\"info-box-number\">2,000</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Monthly Recap Report</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"btn btn-box-tool dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"fa fa-wrench\"></i></button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\">\r\n                  <li><a href=\"#\">Action</a></li>\r\n                  <li><a href=\"#\">Another action</a></li>\r\n                  <li><a href=\"#\">Something else here</a></li>\r\n                  <li class=\"divider\"></li>\r\n                  <li><a href=\"#\">Separated link</a></li>\r\n                </ul>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <p class=\"text-center\">\r\n                  <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\r\n                </p>\r\n\r\n                <div class=\"chart\">\r\n                  <!-- Sales Chart Canvas -->\r\n                  <canvas id=\"salesChart\" style=\"height: 180px;\"></canvas>\r\n                </div>\r\n                <!-- /.chart-responsive -->\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-md-4\">\r\n                <p class=\"text-center\">\r\n                  <strong>Goal Completion</strong>\r\n                </p>\r\n\r\n                <div class=\"progress-group\">\r\n                  <span class=\"progress-text\">Add Products to Cart</span>\r\n                  <span class=\"progress-number\"><b>160</b>/200</span>\r\n\r\n                  <div class=\"progress sm\">\r\n                    <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%\"></div>\r\n                  </div>\r\n                </div>\r\n                <!-- /.progress-group -->\r\n                <div class=\"progress-group\">\r\n                  <span class=\"progress-text\">Complete Purchase</span>\r\n                  <span class=\"progress-number\"><b>310</b>/400</span>\r\n\r\n                  <div class=\"progress sm\">\r\n                    <div class=\"progress-bar progress-bar-red\" style=\"width: 80%\"></div>\r\n                  </div>\r\n                </div>\r\n                <!-- /.progress-group -->\r\n                <div class=\"progress-group\">\r\n                  <span class=\"progress-text\">Visit Premium Page</span>\r\n                  <span class=\"progress-number\"><b>480</b>/800</span>\r\n\r\n                  <div class=\"progress sm\">\r\n                    <div class=\"progress-bar progress-bar-green\" style=\"width: 80%\"></div>\r\n                  </div>\r\n                </div>\r\n                <!-- /.progress-group -->\r\n                <div class=\"progress-group\">\r\n                  <span class=\"progress-text\">Send Inquiries</span>\r\n                  <span class=\"progress-number\"><b>250</b>/500</span>\r\n\r\n                  <div class=\"progress sm\">\r\n                    <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\"></div>\r\n                  </div>\r\n                </div>\r\n                <!-- /.progress-group -->\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- ./box-body -->\r\n          <div class=\"box-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3 col-xs-6\">\r\n                <div class=\"description-block border-right\">\r\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 17%</span>\r\n                  <h5 class=\"description-header\">$35,210.43</h5>\r\n                  <span class=\"description-text\">TOTAL REVENUE</span>\r\n                </div>\r\n                <!-- /.description-block -->\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-sm-3 col-xs-6\">\r\n                <div class=\"description-block border-right\">\r\n                  <span class=\"description-percentage text-yellow\"><i class=\"fa fa-caret-left\"></i> 0%</span>\r\n                  <h5 class=\"description-header\">$10,390.90</h5>\r\n                  <span class=\"description-text\">TOTAL COST</span>\r\n                </div>\r\n                <!-- /.description-block -->\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-sm-3 col-xs-6\">\r\n                <div class=\"description-block border-right\">\r\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 20%</span>\r\n                  <h5 class=\"description-header\">$24,813.53</h5>\r\n                  <span class=\"description-text\">TOTAL PROFIT</span>\r\n                </div>\r\n                <!-- /.description-block -->\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-sm-3 col-xs-6\">\r\n                <div class=\"description-block\">\r\n                  <span class=\"description-percentage text-red\"><i class=\"fa fa-caret-down\"></i> 18%</span>\r\n                  <h5 class=\"description-header\">1200</h5>\r\n                  <span class=\"description-text\">GOAL COMPLETIONS</span>\r\n                </div>\r\n                <!-- /.description-block -->\r\n              </div>\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <!-- Main row -->\r\n    <div class=\"row\">\r\n      <!-- Left col -->\r\n      <div class=\"col-md-8\">\r\n        <!-- MAP & BOX PANE -->\r\n        <div class=\"box box-success\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Visitors Report</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body no-padding\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9 col-sm-8\">\r\n                <div class=\"pad\">\r\n                  <!-- Map will be created here -->\r\n                  <div id=\"world-map-markers\" style=\"height: 325px;\"></div>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-md-3 col-sm-4\">\r\n                <div class=\"pad box-pane-right bg-green\" style=\"min-height: 280px\">\r\n                  <div class=\"description-block margin-bottom\">\r\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,70,90,70,75,80,70</div>\r\n                    <h5 class=\"description-header\">8390</h5>\r\n                    <span class=\"description-text\">Visits</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                  <div class=\"description-block margin-bottom\">\r\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\r\n                    <h5 class=\"description-header\">30%</h5>\r\n                    <span class=\"description-text\">Referrals</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                  <div class=\"description-block\">\r\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\r\n                    <h5 class=\"description-header\">70%</h5>\r\n                    <span class=\"description-text\">Organic</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!-- DIRECT CHAT -->\r\n            <div class=\"box box-warning direct-chat direct-chat-warning\">\r\n              <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Direct Chat</h3>\r\n\r\n                <div class=\"box-tools pull-right\">\r\n                  <span data-toggle=\"tooltip\" title=\"3 New Messages\" class=\"badge bg-yellow\">3</span>\r\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                    </button>\r\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\" data-widget=\"chat-pane-toggle\">\r\n                      <i class=\"fa fa-comments\"></i></button>\r\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                    </button>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"box-body\">\r\n                <!-- Conversations are loaded here -->\r\n                <div class=\"direct-chat-messages\">\r\n                  <!-- Message. Default to the left -->\r\n                  <div class=\"direct-chat-msg\">\r\n                    <div class=\"direct-chat-info clearfix\">\r\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\r\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 2:00 pm</span>\r\n                    </div>\r\n                    <!-- /.direct-chat-info -->\r\n                    <img class=\"direct-chat-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"message user image\">\r\n                    <!-- /.direct-chat-img -->\r\n                    <div class=\"direct-chat-text\">\r\n                      Is this template really for free? That's unbelievable!\r\n                    </div>\r\n                    <!-- /.direct-chat-text -->\r\n                  </div>\r\n                  <!-- /.direct-chat-msg -->\r\n\r\n                  <!-- Message to the right -->\r\n                  <div class=\"direct-chat-msg right\">\r\n                    <div class=\"direct-chat-info clearfix\">\r\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\r\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 2:05 pm</span>\r\n                    </div>\r\n                    <!-- /.direct-chat-info -->\r\n                    <img class=\"direct-chat-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"message user image\">\r\n                    <!-- /.direct-chat-img -->\r\n                    <div class=\"direct-chat-text\">\r\n                      You better believe it!\r\n                    </div>\r\n                    <!-- /.direct-chat-text -->\r\n                  </div>\r\n                  <!-- /.direct-chat-msg -->\r\n\r\n                  <!-- Message. Default to the left -->\r\n                  <div class=\"direct-chat-msg\">\r\n                    <div class=\"direct-chat-info clearfix\">\r\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\r\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 5:37 pm</span>\r\n                    </div>\r\n                    <!-- /.direct-chat-info -->\r\n                    <img class=\"direct-chat-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"message user image\">\r\n                    <!-- /.direct-chat-img -->\r\n                    <div class=\"direct-chat-text\">\r\n                      Working with AdminLTE on a great new app! Wanna join?\r\n                    </div>\r\n                    <!-- /.direct-chat-text -->\r\n                  </div>\r\n                  <!-- /.direct-chat-msg -->\r\n\r\n                  <!-- Message to the right -->\r\n                  <div class=\"direct-chat-msg right\">\r\n                    <div class=\"direct-chat-info clearfix\">\r\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\r\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 6:10 pm</span>\r\n                    </div>\r\n                    <!-- /.direct-chat-info -->\r\n                    <img class=\"direct-chat-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"message user image\">\r\n                    <!-- /.direct-chat-img -->\r\n                    <div class=\"direct-chat-text\">\r\n                      I would love to.\r\n                    </div>\r\n                    <!-- /.direct-chat-text -->\r\n                  </div>\r\n                  <!-- /.direct-chat-msg -->\r\n\r\n                </div>\r\n                <!--/.direct-chat-messages-->\r\n\r\n                <!-- Contacts are loaded here -->\r\n                <div class=\"direct-chat-contacts\">\r\n                  <ul class=\"contacts-list\">\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  Count Dracula\r\n                                  <small class=\"contacts-list-date pull-right\">2/28/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">How have you been? I was...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user7-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  Sarah Doe\r\n                                  <small class=\"contacts-list-date pull-right\">2/23/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">I will be waiting for...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  Nadia Jolie\r\n                                  <small class=\"contacts-list-date pull-right\">2/20/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">I'll call you back at...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user5-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  Nora S. Vans\r\n                                  <small class=\"contacts-list-date pull-right\">2/10/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">Where is your new...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user6-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  John K.\r\n                                  <small class=\"contacts-list-date pull-right\">1/27/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">Can I take a look at...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                    <li>\r\n                      <a href=\"#\">\r\n                          <img class=\"contacts-list-img\" src=\"assets/img/user8-128x128.jpg\" alt=\"User Image\">\r\n\r\n                          <div class=\"contacts-list-info\">\r\n                                <span class=\"contacts-list-name\">\r\n                                  Kenneth M.\r\n                                  <small class=\"contacts-list-date pull-right\">1/4/2015</small>\r\n                                </span>\r\n                            <span class=\"contacts-list-msg\">Never mind I found...</span>\r\n                          </div>\r\n                          <!-- /.contacts-list-info -->\r\n                        </a>\r\n                    </li>\r\n                    <!-- End Contact Item -->\r\n                  </ul>\r\n                  <!-- /.contatcts-list -->\r\n                </div>\r\n                <!-- /.direct-chat-pane -->\r\n              </div>\r\n              <!-- /.box-body -->\r\n              <div class=\"box-footer\">\r\n                <form action=\"#\" method=\"post\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\">\r\n                    <span class=\"input-group-btn\">\r\n                            <button type=\"button\" class=\"btn btn-warning btn-flat\">Send</button>\r\n                          </span>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <!-- /.box-footer-->\r\n            </div>\r\n            <!--/.direct-chat -->\r\n          </div>\r\n          <!-- /.col -->\r\n\r\n          <div class=\"col-md-6\">\r\n            <!-- USERS LIST -->\r\n            <div class=\"box box-danger\">\r\n              <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Latest Members</h3>\r\n\r\n                <div class=\"box-tools pull-right\">\r\n                  <span class=\"label label-danger\">8 New Members</span>\r\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                    </button>\r\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n                    </button>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"box-body no-padding\">\r\n                <ul class=\"users-list clearfix\">\r\n                  <li>\r\n                    <img src=\"assets/img/user1-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Alexander Pierce</a>\r\n                    <span class=\"users-list-date\">Today</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user8-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Norman</a>\r\n                    <span class=\"users-list-date\">Yesterday</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user7-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Jane</a>\r\n                    <span class=\"users-list-date\">12 Jan</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user6-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">John</a>\r\n                    <span class=\"users-list-date\">12 Jan</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user2-160x160.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Alexander</a>\r\n                    <span class=\"users-list-date\">13 Jan</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user5-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Sarah</a>\r\n                    <span class=\"users-list-date\">14 Jan</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user4-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Nora</a>\r\n                    <span class=\"users-list-date\">15 Jan</span>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"assets/img/user3-128x128.jpg\" alt=\"User Image\">\r\n                    <a class=\"users-list-name\" href=\"#\">Nadia</a>\r\n                    <span class=\"users-list-date\">15 Jan</span>\r\n                  </li>\r\n                </ul>\r\n                <!-- /.users-list -->\r\n              </div>\r\n              <!-- /.box-body -->\r\n              <div class=\"box-footer text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"uppercase\">View All Users</a>\r\n              </div>\r\n              <!-- /.box-footer -->\r\n            </div>\r\n            <!--/.box -->\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n        <!-- TABLE: LATEST ORDERS -->\r\n        <div class=\"box box-info\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Latest Orders</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table no-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Order ID</th>\r\n                    <th>Item</th>\r\n                    <th>Status</th>\r\n                    <th>Popularity</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\r\n                    <td>Call of Duty IV</td>\r\n                    <td><span class=\"label label-success\">Shipped</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\r\n                    <td>Samsung Smart TV</td>\r\n                    <td><span class=\"label label-warning\">Pending</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                    <td>iPhone 6 Plus</td>\r\n                    <td><span class=\"label label-danger\">Delivered</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                    <td>Samsung Smart TV</td>\r\n                    <td><span class=\"label label-info\">Processing</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#00c0ef\" data-height=\"20\">90,80,-90,70,-61,83,63</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\r\n                    <td>Samsung Smart TV</td>\r\n                    <td><span class=\"label label-warning\">Pending</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                    <td>iPhone 6 Plus</td>\r\n                    <td><span class=\"label label-danger\">Delivered</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\r\n                    <td>Call of Duty IV</td>\r\n                    <td><span class=\"label label-success\">Shipped</span></td>\r\n                    <td>\r\n                      <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- /.table-responsive -->\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer clearfix\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-left\">Place New Order</a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default btn-flat pull-right\">View All Orders</a>\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n\r\n      <div class=\"col-md-4\">\r\n        <!-- Info Boxes Style 2 -->\r\n        <div class=\"info-box bg-yellow\">\r\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-pricetag-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Inventory</span>\r\n            <span class=\"info-box-number\">5,200</span>\r\n\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" style=\"width: 50%\"></div>\r\n            </div>\r\n            <span class=\"progress-description\">\r\n                    50% Increase in 30 Days\r\n                  </span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n        <div class=\"info-box bg-green\">\r\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-heart-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Mentions</span>\r\n            <span class=\"info-box-number\">92,050</span>\r\n\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" style=\"width: 20%\"></div>\r\n            </div>\r\n            <span class=\"progress-description\">\r\n                    20% Increase in 30 Days\r\n                  </span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n        <div class=\"info-box bg-red\">\r\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-cloud-download-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Downloads</span>\r\n            <span class=\"info-box-number\">114,381</span>\r\n\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" style=\"width: 70%\"></div>\r\n            </div>\r\n            <span class=\"progress-description\">\r\n                    70% Increase in 30 Days\r\n                  </span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n        <div class=\"info-box bg-aqua\">\r\n          <span class=\"info-box-icon\"><i class=\"ion-ios-chatbubble-outline\"></i></span>\r\n\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Direct Messages</span>\r\n            <span class=\"info-box-number\">163,921</span>\r\n\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" style=\"width: 40%\"></div>\r\n            </div>\r\n            <span class=\"progress-description\">\r\n                    40% Increase in 30 Days\r\n                  </span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n\r\n        <div class=\"box box-default\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Browser Usage</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"chart-responsive\">\r\n                  <canvas id=\"pieChart\" height=\"150\"></canvas>\r\n                </div>\r\n                <!-- ./chart-responsive -->\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-md-4\">\r\n                <ul class=\"chart-legend clearfix\">\r\n                  <li><i class=\"fa fa-circle-o text-red\"></i> Chrome</li>\r\n                  <li><i class=\"fa fa-circle-o text-green\"></i> IE</li>\r\n                  <li><i class=\"fa fa-circle-o text-yellow\"></i> FireFox</li>\r\n                  <li><i class=\"fa fa-circle-o text-aqua\"></i> Safari</li>\r\n                  <li><i class=\"fa fa-circle-o text-light-blue\"></i> Opera</li>\r\n                  <li><i class=\"fa fa-circle-o text-gray\"></i> Navigator</li>\r\n                </ul>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n            <!-- /.row -->\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer no-padding\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n              <li><a href=\"#\">United States of America\r\n                  <span class=\"pull-right text-red\"><i class=\"fa fa-angle-down\"></i> 12%</span></a></li>\r\n              <li><a href=\"#\">India <span class=\"pull-right text-green\"><i class=\"fa fa-angle-up\"></i> 4%</span></a>\r\n              </li>\r\n              <li><a href=\"#\">China\r\n                  <span class=\"pull-right text-yellow\"><i class=\"fa fa-angle-left\"></i> 0%</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <!-- /.footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- PRODUCT LIST -->\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Recently Added Products</h3>\r\n\r\n            <div class=\"box-tools pull-right\">\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <ul class=\"products-list product-list-in-box\">\r\n              <li class=\"item\">\r\n                <div class=\"product-img\">\r\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Samsung TV\r\n                      <span class=\"label label-warning pull-right\">$1800</span></a>\r\n                  <span class=\"product-description\">\r\n                          Samsung 32\" 1080p 60Hz LED Smart HDTV.\r\n                        </span>\r\n                </div>\r\n              </li>\r\n              <!-- /.item -->\r\n              <li class=\"item\">\r\n                <div class=\"product-img\">\r\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Bicycle\r\n                      <span class=\"label label-info pull-right\">$700</span></a>\r\n                  <span class=\"product-description\">\r\n                          26\" Mongoose Dolomite Men's 7-speed, Navy Blue.\r\n                        </span>\r\n                </div>\r\n              </li>\r\n              <!-- /.item -->\r\n              <li class=\"item\">\r\n                <div class=\"product-img\">\r\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Xbox One <span class=\"label label-danger pull-right\">$350</span></a>\r\n                  <span class=\"product-description\">\r\n                          Xbox One Console Bundle with Halo Master Chief Collection.\r\n                        </span>\r\n                </div>\r\n              </li>\r\n              <!-- /.item -->\r\n              <li class=\"item\">\r\n                <div class=\"product-img\">\r\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                  <a href=\"javascript:void(0)\" class=\"product-title\">PlayStation 4\r\n                      <span class=\"label label-success pull-right\">$399</span></a>\r\n                  <span class=\"product-description\">\r\n                          PlayStation 4 500GB Console (PS4)\r\n                        </span>\r\n                </div>\r\n              </li>\r\n              <!-- /.item -->\r\n            </ul>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"uppercase\">View All Products</a>\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboard2Component = (function () {
    function AdminDashboard2Component() {
    }
    AdminDashboard2Component.prototype.ngOnInit = function () {
        // Actualiza la barra latera y el footer
        AdminLTE.init();
    };
    AdminDashboard2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard2',
            template: __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboard2Component);
    return AdminDashboard2Component;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <div class=\"pull-right hidden-xs\">\r\n    <b>Version</b> 2.3.11\r\n  </div>\r\n  <strong>Copyright &copy; 2014-2016 <a href=\"http://almsaeedstudio.com\">Almsaeed Studio</a>.</strong> All rights reserved.\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminFooterComponent = (function () {
    function AdminFooterComponent() {
    }
    AdminFooterComponent.prototype.ngOnInit = function () {
    };
    AdminFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-footer',
            template: __webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- Logo -->\r\n  <a href=\"index2.html\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\"><b>A</b>LT</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n  </a>\r\n  <!-- Header Navbar: style can be found in header.less -->\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <!-- Sidebar toggle button-->\r\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n\r\n    <div class=\"navbar-custom-menu\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <!-- Messages: style can be found in dropdown.less-->\r\n        <li class=\"dropdown messages-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <span class=\"label label-success\">4</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 4 messages</li>\r\n            <li>\r\n              <!-- inner menu: contains the actual data -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <!-- start message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <h4>\r\n                      Support Team\r\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                    </h4>\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n                <!-- end message -->\r\n                <li>\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <h4>\r\n                      AdminLTE Design Team\r\n                      <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\r\n                    </h4>\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <h4>\r\n                      Developers\r\n                      <small><i class=\"fa fa-clock-o\"></i> Today</small>\r\n                    </h4>\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <h4>\r\n                      Sales Department\r\n                      <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\r\n                    </h4>\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <h4>\r\n                      Reviewers\r\n                      <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\r\n                    </h4>\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n          </ul>\r\n        </li>\r\n        <!-- Notifications: style can be found in dropdown.less -->\r\n        <li class=\"dropdown notifications-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-bell-o\"></i>\r\n              <span class=\"label label-warning\">10</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 10 notifications</li>\r\n            <li>\r\n              <!-- inner menu: contains the actual data -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\r\n                      page and may cause design problems\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\r\n                    </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n          </ul>\r\n        </li>\r\n        <!-- Tasks: style can be found in dropdown.less -->\r\n        <li class=\"dropdown tasks-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-flag-o\"></i>\r\n              <span class=\"label label-danger\">9</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 9 tasks</li>\r\n            <li>\r\n              <!-- inner menu: contains the actual data -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <!-- Task item -->\r\n                  <a href=\"#\">\r\n                    <h3>\r\n                      Design some buttons\r\n                      <small class=\"pull-right\">20%</small>\r\n                    </h3>\r\n                    <div class=\"progress xs\">\r\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">20% Complete</span>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <!-- end task item -->\r\n                <li>\r\n                  <!-- Task item -->\r\n                  <a href=\"#\">\r\n                    <h3>\r\n                      Create a nice theme\r\n                      <small class=\"pull-right\">40%</small>\r\n                    </h3>\r\n                    <div class=\"progress xs\">\r\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">40% Complete</span>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <!-- end task item -->\r\n                <li>\r\n                  <!-- Task item -->\r\n                  <a href=\"#\">\r\n                    <h3>\r\n                      Some task I need to do\r\n                      <small class=\"pull-right\">60%</small>\r\n                    </h3>\r\n                    <div class=\"progress xs\">\r\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">60% Complete</span>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <!-- end task item -->\r\n                <li>\r\n                  <!-- Task item -->\r\n                  <a href=\"#\">\r\n                    <h3>\r\n                      Make beautiful transitions\r\n                      <small class=\"pull-right\">80%</small>\r\n                    </h3>\r\n                    <div class=\"progress xs\">\r\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\r\n                        aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">80% Complete</span>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <!-- end task item -->\r\n              </ul>\r\n            </li>\r\n            <li class=\"footer\">\r\n              <a href=\"#\">View all tasks</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <!-- User Account: style can be found in dropdown.less -->\r\n        <li class=\"dropdown user user-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n              <span class=\"hidden-xs\">Alexander Pierce</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <!-- User image -->\r\n            <li class=\"user-header\">\r\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n              <p>\r\n                Alexander Pierce - Web Developer\r\n                <small>Member since Nov. 2012</small>\r\n              </p>\r\n            </li>\r\n            <!-- Menu Body -->\r\n            <li class=\"user-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Followers</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Sales</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Friends</a>\r\n                </div>\r\n              </div>\r\n              <!-- /.row -->\r\n            </li>\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer\">\r\n              <div class=\"pull-left\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <!-- Control Sidebar Toggle Button -->\r\n        <li>\r\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-header',
            template: __webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- Sidebar user panel -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>Alexander Pierce</p>\r\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n    <!-- search form -->\r\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n      </div>\r\n    </form>\r\n    <!-- /.search form -->\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\">\r\n      <li class=\"header\">MAIN NAVIGATION</li>\r\n      <li class=\"active treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li class=\"active\"><a routerLink=\"dashboard1\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\r\n          <li><a routerLink=\"dashboard2\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-files-o\"></i>\r\n            <span>Layout Options</span>\r\n            <span class=\"pull-right-container\">\r\n              <span class=\"label label-primary pull-right\">4</span>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\r\n          <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\r\n          <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\r\n          <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/widgets.html\">\r\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-green\">new</small>\r\n            </span>\r\n          </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-pie-chart\"></i>\r\n            <span>Charts</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\r\n          <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\r\n          <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\r\n          <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-laptop\"></i>\r\n            <span>UI Elements</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\r\n          <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\r\n          <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\r\n          <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\r\n          <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\r\n          <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\r\n          <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\r\n          <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\r\n          <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/calendar.html\">\r\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-red\">3</small>\r\n              <small class=\"label pull-right bg-blue\">17</small>\r\n            </span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/mailbox/mailbox.html\">\r\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-yellow\">12</small>\r\n              <small class=\"label pull-right bg-green\">16</small>\r\n              <small class=\"label pull-right bg-red\">5</small>\r\n            </span>\r\n          </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\r\n          <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\r\n          <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\r\n          <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\r\n          <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\r\n          <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\r\n          <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\r\n          <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\r\n          <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n          <li>\r\n            <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\r\n                <span class=\"pull-right-container\">\r\n                  <i class=\"fa fa-angle-left pull-right\"></i>\r\n                </span>\r\n              </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\r\n              <li>\r\n                <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\r\n                    <span class=\"pull-right-container\">\r\n                      <i class=\"fa fa-angle-left pull-right\"></i>\r\n                    </span>\r\n                  </a>\r\n                <ul class=\"treeview-menu\">\r\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n        </ul>\r\n      </li>\r\n      <li><a href=\"documentation/index.html\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\r\n      <li class=\"header\">LABELS</li>\r\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\r\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\r\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLeftSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLeftSideComponent = (function () {
    function AdminLeftSideComponent() {
    }
    AdminLeftSideComponent.prototype.ngOnInit = function () {
    };
    AdminLeftSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-left-side',
            template: __webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLeftSideComponent);
    return AdminLeftSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-routing/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_dashboard2_admin_dashboard2_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                        children: [
                            {
                                path: '',
                                redirectTo: 'dashboard1',
                                pathMatch: 'full'
                            },
                            {
                                path: 'dashboard1',
                                component: __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__["a" /* AdminDashboard1Component */]
                            },
                            {
                                path: 'dashboard2',
                                component: __WEBPACK_IMPORTED_MODULE_0__admin_dashboard2_admin_dashboard2_component__["a" /* AdminDashboard2Component */]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <app-admin-header></app-admin-header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-admin-left-side></app-admin-left-side>\r\n\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <router-outlet></router-outlet>\r\n  <!-- /.content-wrapper -->\r\n  <app-admin-footer></app-admin-footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <app-admin-control-sidebar></app-admin-control-sidebar>\r\n  <!-- /.control-sidebar -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_control_sidebar_admin_control_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_content_admin_content_component__ = __webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_left_side_admin_left_side_component__ = __webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_dashboard2_admin_dashboard2_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__admin_routing_admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__admin_left_side_admin_left_side_component__["a" /* AdminLeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__admin_content_admin_content_component__["a" /* AdminContentComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_2__admin_control_sidebar_admin_control_sidebar_component__["a" /* AdminControlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__["a" /* AdminDashboard1Component */],
                __WEBPACK_IMPORTED_MODULE_10__admin_dashboard2_admin_dashboard2_component__["a" /* AdminDashboard2Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__starter_starter_component__ = __webpack_require__("../../../../../src/app/starter/starter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'starter', component: __WEBPACK_IMPORTED_MODULE_0__starter_starter_component__["a" /* StarterComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
                    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_4__forgot_forgot_component__["a" /* ForgotComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
                ])
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>In the app comp</h3>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starter_starter_component__ = __webpack_require__("../../../../../src/app/starter/starter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__starter_starter_header_starter_header_component__ = __webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__starter_starter_left_side_starter_left_side_component__ = __webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__starter_starter_content_starter_content_component__ = __webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__starter_starter_footer_starter_footer_component__ = __webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__starter_starter_control_sidebar_starter_control_sidebar_component__ = __webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__starter_starter_component__["a" /* StarterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__starter_starter_header_starter_header_component__["a" /* StarterHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__starter_starter_left_side_starter_left_side_component__["a" /* StarterLeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_9__starter_starter_content_starter_content_component__["a" /* StarterContentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__starter_starter_footer_starter_footer_component__["a" /* StarterFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__starter_starter_control_sidebar_starter_control_sidebar_component__["a" /* StarterControlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forgot works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {background: gray;}\r\n.bdclr {\r\n    background: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <div class=\"login-logo\">\r\n    <a href=\"../../index2.html\"><b>Admin</b>LTE</a>\r\n  </div>\r\n  <!-- /.login-logo -->\r\n  <div class=\"login-box-body\">\r\n    <p class=\"login-box-msg\">Sign in to start your session</p>\r\n\r\n    <form action=\"../../index2.html\" method=\"post\">\r\n      <div class=\"form-group has-feedback\">\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n      </div>\r\n      <div class=\"form-group has-feedback\">\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-8\">\r\n          <div class=\"checkbox icheck\">\r\n            <label class=\"\">\r\n              <div class=\"icheckbox_square-blue\" aria-checked=\"false\" aria-disabled=\"false\" style=\"position: relative;\"><input type=\"checkbox\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"><ins class=\"iCheck-helper\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins></div> Remember Me\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <!-- /.col -->\r\n        <div class=\"col-xs-4\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"social-auth-links text-center\">\r\n      <p>- OR -</p>\r\n      <a href=\"#\" class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign in using\r\n        Facebook</a>\r\n      <a href=\"#\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign in using\r\n        Google+</a>\r\n    </div>\r\n    <!-- /.social-auth-links -->\r\n\r\n    <a routerLink=\"/forgot\">I forgot my password</a><br>\r\n    <a routerLink=\"/register\" class=\"text-center\">Register a new membership</a>\r\n\r\n  </div>\r\n  <!-- /.login-box-body -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n        </div>\r\n    </form>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Page Header\r\n      <small>Optional description</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\r\n      <li class=\"active\">Here</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n\r\n    <!-- Your Page Content Here -->\r\n\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterContentComponent = (function () {
    function StarterContentComponent() {
    }
    StarterContentComponent.prototype.ngOnInit = function () {
        // Update the AdminLTE layouts
        AdminLTE.init();
    };
    StarterContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-content',
            template: __webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterContentComponent);
    return StarterContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\r\n  <!-- Create the tabs -->\r\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <!-- Home tab content -->\r\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\r\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Custom Template Design\r\n              <span class=\"pull-right-container\">\r\n                  <span class=\"label label-danger pull-right\">70%</span>\r\n              </span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Stats tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Settings tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n      <form method=\"post\">\r\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n          <p>\r\n            Some information about this general settings option\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n      </form>\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterControlSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterControlSidebarComponent = (function () {
    function StarterControlSidebarComponent() {
    }
    StarterControlSidebarComponent.prototype.ngOnInit = function () {
    };
    StarterControlSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-control-sidebar',
            template: __webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterControlSidebarComponent);
    return StarterControlSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <!-- To the right -->\r\n  <div class=\"pull-right hidden-xs\">\r\n    Anything you want\r\n  </div>\r\n  <!-- Default to the left -->\r\n  <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterFooterComponent = (function () {
    function StarterFooterComponent() {
    }
    StarterFooterComponent.prototype.ngOnInit = function () {
    };
    StarterFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-footer',
            template: __webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterFooterComponent);
    return StarterFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n\r\n  <!-- Logo -->\r\n  <a href=\"#\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\"><b>A</b>LT</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n  </a>\r\n\r\n  <!-- Header Navbar -->\r\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n    <!-- Sidebar toggle button-->\r\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n    <!-- Navbar Right Menu -->\r\n    <div class=\"navbar-custom-menu\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <!-- Messages: style can be found in dropdown.less-->\r\n        <li class=\"dropdown messages-menu\">\r\n          <!-- Menu toggle button -->\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <span class=\"label label-success\">4</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 4 messages</li>\r\n            <li>\r\n              <!-- inner menu: contains the messages -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <!-- start message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"pull-left\">\r\n                      <!-- User Image -->\r\n                      <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                    </div>\r\n                    <!-- Message title and timestamp -->\r\n                    <h4>\r\n                      Support Team\r\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                    </h4>\r\n                    <!-- The message -->\r\n                    <p>Why not buy a new awesome theme?</p>\r\n                  </a>\r\n                </li>\r\n                <!-- end message -->\r\n              </ul>\r\n              <!-- /.menu -->\r\n            </li>\r\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n          </ul>\r\n        </li>\r\n        <!-- /.messages-menu -->\r\n\r\n        <!-- Notifications Menu -->\r\n        <li class=\"dropdown notifications-menu\">\r\n          <!-- Menu toggle button -->\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-bell-o\"></i>\r\n              <span class=\"label label-warning\">10</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 10 notifications</li>\r\n            <li>\r\n              <!-- Inner Menu: contains the notifications -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <!-- start notification -->\r\n                  <a href=\"#\">\r\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                    </a>\r\n                </li>\r\n                <!-- end notification -->\r\n              </ul>\r\n            </li>\r\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n          </ul>\r\n        </li>\r\n        <!-- Tasks Menu -->\r\n        <li class=\"dropdown tasks-menu\">\r\n          <!-- Menu Toggle Button -->\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-flag-o\"></i>\r\n              <span class=\"label label-danger\">9</span>\r\n            </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">You have 9 tasks</li>\r\n            <li>\r\n              <!-- Inner menu: contains the tasks -->\r\n              <ul class=\"menu\">\r\n                <li>\r\n                  <!-- Task item -->\r\n                  <a href=\"#\">\r\n                    <!-- Task title and progress text -->\r\n                    <h3>\r\n                      Design some buttons\r\n                      <small class=\"pull-right\">20%</small>\r\n                    </h3>\r\n                    <!-- The progress bar -->\r\n                    <div class=\"progress xs\">\r\n                      <!-- Change the css width attribute to simulate progress -->\r\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">20% Complete</span>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n                <!-- end task item -->\r\n              </ul>\r\n            </li>\r\n            <li class=\"footer\">\r\n              <a href=\"#\">View all tasks</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <!-- User Account Menu -->\r\n        <li class=\"dropdown user user-menu\">\r\n          <!-- Menu Toggle Button -->\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <!-- The user image in the navbar-->\r\n            <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n            <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n            <span class=\"hidden-xs\">Alexander Pierce</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <!-- The user image in the menu -->\r\n            <li class=\"user-header\">\r\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n              <p>\r\n                Alexander Pierce - Web Developer\r\n                <small>Member since Nov. 2012</small>\r\n              </p>\r\n            </li>\r\n            <!-- Menu Body -->\r\n            <li class=\"user-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Followers</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Sales</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Friends</a>\r\n                </div>\r\n              </div>\r\n              <!-- /.row -->\r\n            </li>\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer\">\r\n              <div class=\"pull-left\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <!-- Control Sidebar Toggle Button -->\r\n        <li>\r\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterHeaderComponent = (function () {
    function StarterHeaderComponent() {
    }
    StarterHeaderComponent.prototype.ngOnInit = function () {
    };
    StarterHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-header',
            template: __webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterHeaderComponent);
    return StarterHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n\r\n    <!-- Sidebar user panel (optional) -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>Alexander Pierce</p>\r\n        <!-- Status -->\r\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- search form (Optional) -->\r\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n      </div>\r\n    </form>\r\n    <!-- /.search form -->\r\n\r\n    <!-- Sidebar Menu -->\r\n    <ul class=\"sidebar-menu\">\r\n      <li class=\"header\">HEADER</li>\r\n      <!-- Optionally, you can add icons to the links -->\r\n      <li class=\"active\"><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Link</span></a></li>\r\n      <li><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Another Link</span></a></li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>Multilevel</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"#\">Link in level 2</a></li>\r\n          <li><a href=\"#\">Link in level 2</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n    <!-- /.sidebar-menu -->\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterLeftSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterLeftSideComponent = (function () {
    function StarterLeftSideComponent() {
    }
    StarterLeftSideComponent.prototype.ngOnInit = function () {
    };
    StarterLeftSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-left-side',
            template: __webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterLeftSideComponent);
    return StarterLeftSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n   <!-- Main Header -->\r\n  <app-starter-header></app-starter-header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-starter-left-side></app-starter-left-side>\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <app-starter-content></app-starter-content>\r\n  <!-- /.content-wrapper -->\r\n  <!-- Main Footer -->\r\n  <app-starter-footer></app-starter-footer>\r\n  <!-- Control Sidebar -->\r\n  <app-starter-control-sidebar></app-starter-control-sidebar>\r\n  <!-- /.control-sidebar -->\r\n  <!-- Add the sidebar's background. This div must be placed\r\n       immediately after the control sidebar -->\r\n  <div class=\"control-sidebar-bg\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterComponent = (function () {
    function StarterComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    StarterComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    StarterComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    StarterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter',
            template: __webpack_require__("../../../../../src/app/starter/starter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map