Template.appInfo.helpers({
	messages: function () {
		return Messages.find({}, {sort: {createdAt: -1}, limit: 10})
	}

});

Template.appInfo.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event) {
		if(event.which ===  13){
			Messages.insert({
				Name: $(".txtName").val(),
				Age: $(".txtAge").val(),
				Address: $(".txtAddress").val(),
				Gender: $(".txtGender").val(),
				Birthdate: $(".txtBdate").val(),
				
				createdAt: new Date()
			});

			$(".txtText").val("");
			$(".txtText").focus();
		}
		return false;
	}

});