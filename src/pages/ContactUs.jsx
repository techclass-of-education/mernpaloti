export function ContactUs() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <input type="email" placeholder="Email-id" />
        <input type="mobile" placeholder="Mobile No" />
        <select>
          <option selected>Select Subject</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Feedback">Feedback</option>
        </select>
        <textarea></textarea>
      </form>
    </div>
  );
}
