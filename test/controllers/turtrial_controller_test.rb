require "test_helper"

class TurtrialControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get turtrial_index_url
    assert_response :success
  end
end
