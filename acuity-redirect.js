document.addEventListener('DOMContentLoaded', function () {
  var iframe = document.getElementById('acuity-iframe');
  window.addEventListener('message', function (event) {
    if (event.origin !== 'https://app.acuityscheduling.com' || event.source !== iframe.contentWindow) {
      return;
    }

    if (event.data.type === 'scheduled') {
      window.location.href = 'https://myoptimalbody.com'; // Replace with the URL you want to redirect to after scheduling an appointment
    }
  });
});
