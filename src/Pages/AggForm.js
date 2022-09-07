import React from 'react'

const AggForm = () => {
  return (
    <div class="form-style-5">
<form>
<fieldset>
<legend><span class="number">1</span> Candidate Info</legend>
<input type="text" name="field1" placeholder="Your Name *">
<input type="email" name="field2" placeholder="Your Email *">
<textarea name="field3" placeholder="About yourself"></textarea>
<label for="job">Interests:</label>
<select id="job" name="field4">
<optgroup label="Indoors">
  <option value="fishkeeping">Fishkeeping</option>
  <option value="reading">Reading</option>
  <option value="boxing">Boxing</option>
  <option value="debate">Debate</option>
  <option value="gaming">Gaming</option>
  <option value="snooker">Snooker</option>
  <option value="other_indoor">Other</option>
</optgroup>
<optgroup label="Outdoors">
  <option value="football">Football</option>
  <option value="swimming">Swimming</option>
  <option value="fishing">Fishing</option>
  <option value="climbing">Climbing</option>
  <option value="cycling">Cycling</option>
  <option value="other_outdoor">Other</option>
</optgroup>
</select>      
</fieldset>
<fieldset>
<legend><span class="number">2</span> Additional Info</legend>
<textarea name="field3" placeholder="About Your School"></textarea>
</fieldset>
<input type="submit" value="Apply" />
</form>
</div>
  )
}

export default AggForm