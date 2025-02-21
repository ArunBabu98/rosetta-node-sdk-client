"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SyncStatus model module.
 * @module model/SyncStatus
 * @version 1.4.1
 */
var SyncStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncStatus</code>.
   * SyncStatus is used to provide additional context about an implementation&#39;s sync status. It is often used to indicate that an implementation is healthy when it cannot be queried  until some sync phase occurs. If an implementation is immediately queryable, this model is often not populated.
   * @alias module:model/SyncStatus
   * @param currentIndex {Number} CurrentIndex is the index of the last synced block in the current stage.
   */
  function SyncStatus(currentIndex) {
    _classCallCheck(this, SyncStatus);

    SyncStatus.initialize(this, currentIndex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncStatus, null, [{
    key: "initialize",
    value: function initialize(obj, currentIndex) {
      obj['current_index'] = currentIndex;
    }
    /**
     * Constructs a <code>SyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncStatus} obj Optional instance to populate.
     * @return {module:model/SyncStatus} The populated <code>SyncStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncStatus();

        if (data.hasOwnProperty('current_index')) {
          obj['current_index'] = _ApiClient["default"].convertToType(data['current_index'], 'Number');
        }

        if (data.hasOwnProperty('target_index')) {
          obj['target_index'] = _ApiClient["default"].convertToType(data['target_index'], 'Number');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SyncStatus;
}();
/**
 * CurrentIndex is the index of the last synced block in the current stage.
 * @member {Number} current_index
 */


SyncStatus.prototype['current_index'] = undefined;
/**
 * TargetIndex is the index of the block that the implementation is attempting to sync to in the current stage.
 * @member {Number} target_index
 */

SyncStatus.prototype['target_index'] = undefined;
/**
 * Stage is the phase of the sync process.
 * @member {String} stage
 */

SyncStatus.prototype['stage'] = undefined;
var _default = SyncStatus;
exports["default"] = _default;